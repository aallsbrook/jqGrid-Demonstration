function getFoodsInfo(req, resp){
    var ret = [
        {"name":"Potato Chips","servingSize":"10 chips","calories":"78g","fat":"44g", "carbs":"12g", "protein":"9g"},
        {"name":"Chocolate Chip Cookie","servingSize":"10 chips","calories":"78g","fat":"44g", "carbs":"12g", "protein":"9g"},
        {"name":"Diet Coke","servingSize":"10 chips","calories":"78g","fat":"44g", "carbs":"12g", "protein":"9g"},
        {"name":"Fish Stick","servingSize":"10 chips","calories":"78g","fat":"44g", "carbs":"12g", "protein":"9g"}
    ];
    resp.success( ret);
}