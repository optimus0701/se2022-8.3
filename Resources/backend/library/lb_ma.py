from .extension import ma


class UserSchema(ma.Schema):
    class Meta:
        fields = ('username', 'password', 'email', 'user_role')


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('type_id', 'pro_name', 'description',
                  'price', 'image', 'seller', 'number')


class ProducttypeSchema(ma.Schema):
    class Meta:
        fields = ('type_id', 'type_name')
