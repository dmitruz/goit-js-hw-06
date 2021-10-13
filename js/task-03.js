const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesList = document.querySelector('gallery');
for (let i = 0; i < images.length; i += 1) {
const options = images.option[i];



const galleryElem1 = document.createElement('li');
galleryElem1.classList.add('gallery-item');
console.log(galleryElem1);

const imgElem1 = document.createElement('img');
imgElem1.url = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imgElem1.alt = 'White and Black Long Fur Cat';
console.log('image' , imgElem1);


const galleryElem2 = document.createElement('li');
galleryElem2.classList.add('gallery-item');
console.log(galleryElem2);

const imgElem2 = document.createElement('img');
imgElem2.url = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imgElem2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
console.log('image' , imgElem2);

const galleryElem3 = document.createElement('li');
galleryElem3.classList.add('gallery-item');
console.log(galleryElem3);

const imgElem3 = document.createElement('img');
imgElem3.url = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imgElem3.alt = 'Group of Horses Running';
console.log('image' , imgElem3);

images.push(galleryElem1, galleryElem2, galleryElem3);
}
gallery.append(...images);



