from debug_utils import debug_wrap

@debug_wrap
def generate_scale(data):
    return [x * 2 for x in data]