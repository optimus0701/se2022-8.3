from .extension import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('username', 'password', 'email', 'user_role')
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('pro_name', 'description', 'price', 'image', 'seller')
class ProducttypeSchema(ma.Schema):
    class Meta:
        fields = ('type_id', 'type_name')
class CartSchema(ma.Schema):
    class Meta:
        fields = ('username', 'pro_name', 'count', 'total')