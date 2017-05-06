var array = [1, 2, true, 'b', 'false', '1', false, { a: 'a' }, [1, 2, 3], function abs() {}]

var quote = "Bob's book"

var odun = 1
var dwa = 2

var x
var a = null
a = 'bbb'
x = 'xxx'

var one = array[0] // 1
var bool = array[6] // false
var myFunc = array[9] // func
var second = array[8][1]

var obj = {
	one: 1,
	bool: true,
	quote: "Tom's books",
	address: {
		street: 'Kotyka 7'
	}
}

var oOne1 = obj.one
var oOne2 = obj['one']

var address = 'address'
var street = 'street'

var street1 = obj.address.street
var street2 = obj[address]['street']
var street3 = obj['address'].street
var street4 = obj.address['street']

console.log(street1, street2, street3, street4)
