from bson import ObjectId


def bson_to_json(id: ObjectId):
    if type(id) == ObjectId:
        return str(id)
    raise TypeError("id is not an ObjectId")


# print(type(bson_to_json(ObjectId("5f9f2f5f5f9f2f5f9f2f5f9f"))))


def json_to_bson(id):
    if type(id) == str:
        return ObjectId(id)
    raise TypeError("id is not a string")


# print(type(json_to_bson("5f9f2f5f5f9f2f5f9f2f5f9f")))


def bson_dict_to_json_dict(dict: dict):
    _id = "_id"
    if _id in dict:
        id = dict[_id]
        if type(id) == ObjectId:
            dict["id"] = bson_to_json(id)
        else:
            dict["id"] = id
        dict.pop(_id)
        return dict
    else:
        raise KeyError("id not found in dict")


# print(bson_dict_to_json_dict({"_id": json_to_bson("5f9f2f5f5f9f2f5f9f2f5f9f")}))


def bson_list_to_json_list(list: list):
    converted = []
    for item in list:
        if type(item) == dict:
            """
            For [{"id": ObjectId("5f9f2f5f5f9f2f5f9f2f5f9f")}, {"id": ObjectId("5f9f2f5f5f9f2f5f9f2f5f9f")}]
            """
            converted.append(bson_dict_to_json_dict(item))
        else:
            raise TypeError("item is not a dict")
    return converted


def json_list_to_bson_list(list: list):
    converted = []
    for item in list:
        if type(item) == str:
            """
            For ["5f9f2f5f5f9f2f5f9f2f5f9f", "5f9f2f5f5f9f2f5f9f2f5f9f"]
            """
            converted.append(json_to_bson()(item))
        else:
            raise TypeError("item is not a string")
    return converted


# print(
#     bson_list_to_json_list(
#         [
#             {"id": json_to_bson("5f9f2f5f5f9f2f5f9f2f5f9f")},
#             {"id": json_to_bson("5f9f2f5f5f9f2f5f9f2f5f9f")},
#         ]
#     )
# )
