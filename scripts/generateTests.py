#!/usr/bin/env python3

from pathlib import Path
import ast
import sys

# TO DO - update to arg parse with help instructions
file_name = sys.argv[1]

def extractTests(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.readlines()
    startIndex = content.index("Tests:\n" ) + 1
    endIndex = content.index("*/\n")

    tests = []
    for i in range(startIndex, endIndex):
        if content[i].endswith(".\n"):
            content[i] = content[i][:-2]
        elif content[i].endswith("\n"):
            content[i] = content[i][:-1]
        tests.append(content[i])
    return tests

def check_python_string_type(data_string):
    try:
        parsed_data = ast.literal_eval(data_string)
        
        if isinstance(parsed_data, list) or isinstance(parsed_data, dict):
            return "toStrictEqual"
        else:
            return "toBe"
            
    except (ValueError, SyntaxError):
        return "Malformed or unsafe string literal"


def write_file(test_dir, file_contents):
    with open(Path(test_dir) , "w", encoding="utf-8") as file:
        file.write(file_contents)


def main():
    home = Path.home()
    base_path = Path("/Coding/code-challenges/freeCodeCamp")
    test_dir = Path(f"{home}{base_path}/__tests__/{file_name.replace('.js', '.test.js')}")
    file_path = Path(f"{home}{base_path}/{file_name}")

    test_list = extractTests(file_path)
    file_contents = f"const {file_name.replace('.js', '')} = require('../{file_name}');\n"

    for test in test_list:
        io_list = test.split(" should return ")
        expectFunc = io_list[0]
        to_be = io_list[1]
        jest_matcher = check_python_string_type(to_be)
        test_template = f"""test('{test}', () => {{
    expect({expectFunc}).{jest_matcher}({to_be})
}})"""
        file_contents += f"\n{test_template}\n"
        
    write_file(test_dir, file_contents)

if __name__ == "__main__":
    main()