# Generate a *.test.js file containing tests
# calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"].
# calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"].
# calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"]

from pathlib import Path
import ast

def check_python_string_type(data_string):
    try:
        parsed_data = ast.literal_eval(data_string)
        
        if isinstance(parsed_data, list) or isinstance(parsed_data, dict):
            return "toStrictEqual"
        else:
            return "toBe"
            
    except (ValueError, SyntaxError):
        return "Malformed or unsafe string literal"


def write_file(test_dir, test_file_name, file_contents):
    with open(Path(test_dir, test_file_name + ".test.js") , "w", encoding="utf-8") as file:
        file.write(file_contents)

tests = """
calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"].
calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"].
calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"]
"""

def main(tests):
    home = Path.home()
    test_dir = Path(f"{home}/Coding/code-challenges/freeCodeCamp/__tests__")

    test_list = [line for line in tests.splitlines() if line.strip()]
    test_file_name = test_list[0].split("(")[0];

    file_contents = f"const {test_file_name} = require('../{test_file_name}.js');\n"

    for test in test_list:
        if test[-1] == ".":
            test = test[:-1]
        io_list = test.split(" should return ")
        expectFunc = io_list[0]
        to_be = io_list[1]
        jest_matcher = check_python_string_type(to_be)
        test_template = f"""test('{test}', () => {{
    expect({expectFunc}).{jest_matcher}({to_be})
}})"""
        file_contents += f"\n{test_template}\n"
        
    write_file(test_dir, test_file_name, file_contents)

if __name__ == "__main__":
    main(tests)