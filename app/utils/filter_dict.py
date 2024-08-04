def filter_dictionary(input_dict: dict) -> dict:
    """
    Filter out falsy items from the input dictionary.

    Parameters:
    - input_dict (dict): The dictionary from which falsy items are to be filtered.

    Returns:
    - dict: A new dictionary with only truthy items.
    """
    if type(input_dict) is not dict:
        return {}
    else:
        filtered_dict = {}
        for key, value in input_dict.items():
            if value:
                filtered_dict[key] = value
        return filtered_dict


# # Example usage:
# my_dict = {"a": 1, "b": None, "c": "", "d": 0, "e": False, "f": True, "g": "Hello"}

# filtered_dict = filter_dict(my_dict)
# print(filtered_dict)
