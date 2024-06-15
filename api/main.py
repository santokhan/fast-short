import json

def read_json_file(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def write_json_file(directory, file_name, data):
    full_path = directory + file_name
    # print(data)
    # print('\n')
    with open(full_path, 'w') as f:
        data = json.dump(data, f, indent=4)
    return data


jobs = read_json_file('./api/jobs.json')

for job in jobs:
    file_name = job['id'] + '.json'
    write_json_file('./api/job/', file_name, job)
    # print(job)

