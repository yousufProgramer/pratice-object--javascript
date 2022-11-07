//*******  7- What is the value of y? 

//  let x = 10;

//  let y = (x > 5) && (x < 15);

// output y = true

//******* */ 8- What is the value of x?

// let x = 5; 

// x += 3; 

// output  x  = 8
 
// ********* 9- What is the value of y? 

// let x = 10; 

// let y = x++;

/// output y =10; 

// ********10- What is the value of y? 
// let x = 1; 

// let y = x !== 2;
//  output y =true;

// 1. create an address Object

const addressObj = {
    city : 'sirajganj',
    thana : 'kazipur',
    upozala : 'kazipur',
    postOffice : 'Meghai',
    village : 'Muslim para'
}
console.log(addressObj);

// 2. conver adderess object to factory function

function myFucAddressObj(city,thana,upozala,postOffice,village){
    return{
      city : city,
      thana : thana,
      upozala : upozala,
      postOffice : postOffice,
      village : village,

      getObj(){
        return this.city + " " + this.thana+ ' ' + this.upozala+ " " + this.postOffice+ ' ' + this.village;
    }
    }

}

const newObj = myFucAddressObj('sirajganj','kazipur', 'kazipur','Meghai','Muslim para');
console.log(newObj.getObj());


////***3. convert anddress object to constructor function and add one method on object propotype */

function CreateAddress(city,thana,upozala,postOffice,village) {
    this.city = city;
    this.thana = thana;
    this.upozala = upozala;
    this.postOffice = postOffice;
    this.village = village;
  }
  CreateAddress.prototype.getObj = function () {
     console.log(this.village);
  };
  
  const newObjC = new CreateAddress ('sirajganj','kazipur', 'kazipur','Meghai','Muslim para');
  console.log(newObjC);

//   4. create a function that function take to object and check the provided object are same or not.

const person1 = {
    name : 'Yousuf Ahemd',
    age : 20,
    job : 'javascript',
}

const person2 = {
    name : 'Yousuf Ahemd',
    age : 20,
    job : 'javascript',
}

function compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  const result= compare(person1, person2);
  console.log(result);

//   5. create a blog post object.

const blogPostObj = {
    name : 'food product',
    place : 'mirpur-10',
    RestaurantName : 'k te kachi',
    Description : 'food, substance consisting essentially of protein, carbohydrate, fat, and',
    overView : 'good',
}
console.log(blogPostObj);


// 6. convert blog post object to constructor function.

function BlogPost(name,place,RestaurantName,Description,overView){
    this.name = name;
    this.place = place;
    this.RestaurantName = RestaurantName;
    this.Description = Description;
    this.overView = overView;
}
const newBlog = new BlogPost('food product','mirpur-10','k te kachi','food, substance consisting essentially of protein, carbohydrate, fat, and','good')
console.log(newBlog);


