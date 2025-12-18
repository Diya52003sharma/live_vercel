import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ime from "../assets/images/empty.png"
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img from '../assets/images/img.png'
import imgg from '../assets/images/imgg.png'
import imggg from '../assets/images/imggg.png'
function Web()
{
    return(
        <>
        <div>
     <div className="bg-[url('./assets/images/bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-[500px]">


                <div className="">
                <div className="grid grid-cols-2 p-6 text-white bg-black/30 ">
                 <div className="flex justify-center text-4xl font-bold tracking-widest font-serif ">
                    F O O D C O U R T 
                    </div>
                   <div className="grid grid-cols-6 gap-3 " >
                    <a href="" className="p-2 font-serif">HOME</a>
                    <a href="" className="p-2 font-serif">MENU</a>
                    <a href="" className="p-2 font-serif">COOKING</a>
                    <a href="" className="p-2 font-serif">BLOG</a>
                    <a href="" className="p-2 font-serif">CONTACT</a>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white border-white gap-5 rounded mr-2 hover:scale-108 font-serif"> <FontAwesomeIcon icon={faPhone} />Call</button>
                   </div>
                </div>
                <div className="grid mt-10">
                    <div className=" text-white m-8 font-mono">
                      <h2 class="text-[38px] font-serif  mb-4">Taste of <span class="text-orange-500">Indian Food</span> in <br/> an Elegant Atmosphere</h2>
                        <p class="max-w-xl mb-6">Journey through India's rich flavors with traditional dishes—prepared with authentic spices and served with an elegant charm.</p>
                        <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded hover:scale-108" >Explore Our Menu</button>
                                        </div>
                                      
                </div>
                </div>
                </div>
                <div className="grid grid-cols-3  px-12 py-8 gap-4 h-[200px] text-center drop-shadow-[4px_4px_10px_rgba(0,0,0,0.4)] ">
                    <div className=" grid grid-cols-2 bg-orange-200 font-serif hover:scale-102">
                        <div><img src={img}alt="" /></div>
                        <div>
                            <h1 className="text-orange-400  text-2xl text-center font-bold mt-4 ">Beveragers</h1>
                            <span className="flex text-justify p-2 text-gray-900">Refreshing cold drinks and hot beverages. </span>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 hover:scale-102  bg-orange-200 ">
                        <div><img  className="bg-remo" src={imggg} alt="" /></div>
                        <div>
                            <h1 className="text-orange-400 text-2xl text-center font-bold mt-4 ">Main Dishes</h1>
                            <span className="flex text-justify p-2 text-gray-900  ">Rich Indian delicacies with bold flavors </span>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 hover:scale-102 bg-orange-200 ">
                        <div><img src={imgg} alt="" /></div>
                        <div>
                            <h1 className="text-orange-400  text-2xl mt-4 text-center font-bold">Snacks</h1>
                            <span className="flex text-justify p-2 text-gray-900 mr-6">Quick bites full of crunch and zing. </span>
                        </div>
                    </div>
                    </div>
                    
                <div className="grid grid-cols-2 mt-10 gap-4 px-12">
                    <h1 className="text-4xl text-bl font-bold">Featured <span className="font-bold text-orange-400">Recipes</span> <br />Selections</h1>
                    <p className="max-w-2xl mb-10 mr-16 text-gray-600">Discover the flavors behind our kitchen! From quick bites to traditional feasts, explore our collection of vegetarian and non-vegetarian recipes.</p>
                </div>
                <div className="grid grid-cols-4  px-12 py-8 gap-6 text-center">
                    <img src={img1} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102" />
                    <img src={img2} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102"/>
                    <img src={img3} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102"/>
                    <img src={img4} alt="img1"className="w-full h-[200px] object-cover rounded hover:scale-102" />
                    <img src={img1} alt="img1"className="w-full h-[200px] object-cover rounded hover:scale-102" />
                    <img src={img3} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102"/>
                    <img src={img4} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102"/>
                    <img src={img2} alt="img1" className="w-full h-[200px] object-cover rounded hover:scale-102"/>
                    
                </div>
            

        </div>
        <div className="">  
        <div  className="grid grid-cols-2 gap-0">
        <div className="p-18 ml-22">
            <div className="flex flex-row  "><span className="bg-orange-600 w-6 h-1 mt-2"></span><span className="text-[15px]">ABOUT US</span></div>
           <div className="text-[32px] font-bold font-serif">Exploring the stories and Aroma of <span className="text-orange-500">Ruchi Priya Kitchen</span></div>
           <div className="flex text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis quidem veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos </div>
           </div>
           <div className="abosolute grid grid-cols-2">
            <div className="z-10 w-82 h-90 mt-12 ml-18"><img src="https://img.freepik.com/free-photo/top-view-boiled-rice-plate-with-loby-beans-variety-meat-sauce_141793-3943.jpg?semt=ais_hybrid&w=740&q=80"alt="" /></div>
            <div className="bg-amber-700 w-80 h-88 mr-18 relative "></div>
            
            
        </div>
        </div>
        </div>
        <div className="text-center mt-0 text-[40px] font-serif"><span className="text-orange-500   ">Navigate </span>Your <br />Cusine Journey
        </div>
        <div><span className="flex ml-58 mr-58 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, quis fugiat. ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis, consequatur nobis sint itaque beatae libero laborum aperiam inventore, qui adipisci quis.</span></div>
        <div className="grid grid-cols-3 p-12 gap-10 ml-8">
            <div >
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFhUXGBUXFhgXGBgYGBcXFRUWFxcVFRcYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABREAACAQMCAgYDCQwIBAUFAAABAgMABBEFIRIxBhNBUWFxIoGRBxQyUpKhscHRFSNCQ1NUYmNygqLwM1Vzk7LC0uEWJGSDFzRE0/FFdJSjs//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACcRAAICAgIBBAEFAQAAAAAAAAABAhEDIRIxQQQTFFFhIjJCcfCh/9oADAMBAAIRAxEAPwBQuRldqpTNsBUcl7g4qCS4yaioOw+54CEsfoGltx6VGJbz0cUFd/SqqIqyy1S2971YyBmq5euWUkHArDIbNE6QAozGLPD5UStemCSEJ1GMnHNaR9JLAMvLNWrFeCRfBgfnqfBW7OhzfFUPOpWsQj4xHzKj5W2aIN0YjtpoFPppPxKc8g2MjHmMjzxQXUdSBh4Bz2+Y5pp6S6vFJbQFT6S4O3MHh5+2jFLwTk5PsU+mtultOY1iBHCGU94Pq7wR6qVrm64CkgQYBG3f/OKade1u2mjZZAxm/BfsG+djnbyIxvShdkFAoOcGjaZkmt2EdQ1IsQ/VgAgAD+fOrWl3qSPHH1fCSd2ztQqZSUWptEGJ4y3LiFCEYpDZZSbH630pZpjbYHDjOfV/vRXor0WWFpIeEFA22fb9dQaLdBb0EcuHGfVTPp+ohJ5CeRP1CmjGJGc5WZl05lNtctGiqBgEbd9AbXpLMjHGPSGDuRsezbs8KPe6fJ1t0WXf0QPZSVFA3aKLSGg3VjnZrxWskwOHRlYYPLJ7KV9VvHlleSRizvuSeZxsPmFH9LdltpN8hhgjy/8Amq2o6VJIscqJsFwR2nxpNJlFdANbkgDetQN88VvagMQpQHAJAJwNzjtrNrHTGnKonwyx58vXTzdwlo44WccUICnByOz7KdsilbpjHe2Ek5tZjORwEEZJJySM+nni5dxq90ovoJZI45L2ON0XhX4TEsxALEruMYFBgyiJRxH0RtvWfZLSykk5Jbc99JyKcAj0v6Dx2USvLdJJLK28aA5CEkmTOTns543NDLEMYCFJZOLgyckHbIBB5HtqlJ0cv5SSoLjPIOD83rrnSkaJmifKlW9JSeRGRuO/n7a0qa0GKcXs9igxZk/FlYfNiqVryT1UWgce8HBO7THA7efPFDrSBm4FVSTsAAMknPIAUsH3/ZTJHr+hs0pfvyHGcNAxHLZW4jv5A07dFkiFtdShPSGQp/CCEg8JI58h7KA9FIhE0sk44VVQnpDcOR3eAI9tF+jl+IBIj4KSLgEcs9hoxp7JTtaHjobfo8fonkVB8+VGNah6y2lT4yMvzEUudGb6JUHE6Kx+ENhuDz/nvpnuLmMxtiROR34h3VQnF6Pz/wBJrQpHKp7OrPzsKW9NXMMo/RBpx11uPrgzhiQAPMMOXtNA9I0O4WN3aFxGVI4irAE+BIqcei8/AJ6IXBWcHGcH6jT8OlgQ7o2MYH+9JfRSJVmkLbBTtnzb7au2t0rOqty4vrrlzRhLK5NdI9H07fx1G/LH732FQ3ABOdz44GwFL3/Hf6n+L/ajmrXsS2xUEfB7/Csw9VR9I0+To3qVJcULz3JJzRK0AK5NCFiNXVTC16ro8tRsleQVPHocjb9hoRxEGmiz6RoqgEchU8vNJcEPhWNt82XrfoxGQOJ8HG+9Wl0GJPgtnv7fpqmnSOM7AVN92UX4Vcb9/wAnao4PBWngWMkBarBN9lJop924G51PbajCd1FMpzS2jOEG9SBEyyEbJUvXTFQoj2os2tRDYmo31+AfhUVkn4QssUL2wBJok7nPDUa6ROuxSmu16QQY+HXf3ft+1xW9zL9A9vF9/wDQFNxMqr1RBHb3/NXdvAw/Fmjo1y3+OK7OuwflBSrJNdILxwl2zzS9SeNgepJ9ePqq/Jr0gJYQfP8A7UFg1cdZu44fOi3vhD+GPbReaa7Qq9PBu0wBqt1JM+epxVMQTYI6rnTUpTvX5qm61PjL7RQ+RL6D8aP2J1vZMgOWwe6rtjr00I4CnEoJxnuPZTHDFHknapGji/R9opXnl9Dr08fsVdM1MwzNKsYOc+iQcDPca+gmYMzBSOMkkAcsmmkcA5FfmriSbljh9tb5MvoHxY/YFlu3K4AJPfg0Dntbhz6K47+zNP0cgPZUvCK3yX9B+KurFnQFuYclSQcDG+QGGOw+QpcvdJvWmkmK5Z2LNy3ycnYbCtDdgtc9ev8AJoL1Ul4N8RPyIaWtyMf8tuPAVLDBeqQyWzAg5DKMEHnkEdtOjTr3096Dgwx93CKMPUOTqhcmDirszGS7u5Y8e9XSUENxZzxc+LiJOc75qafVdVkTqZAzJsOEcHIctwufnrWzEvdSp0m0pXkBGxwOW3fVZTcEQWNTexd0ee+QBVNxHjliGJx29rKT2mrmp2mryxkdeXU81MEKNv8A9vb1GrttavGMccmPBm+2ikHWYwrOe9ixOPLNaOZsWWBRd6M4ToZfE5Mcue/0R9dH4NB1JkEcjzGPnwtNgezNNYtjnJZvaamaNQOfz0VkbC4Ge3HQG5Z88UaA424gdvbua5n9zmddxPH68j6K0NuqAySvtFVpdWgRTxTINj2itVjrJKKpGQ6tYiFSffcMrA4KIxLeJ37qEe+TX122XYjkWYj1k1BTKKH9yX2eabZGQZqX3kc4ojosOELVBG54/CrPs5k21QD1GDhNUwabNUtFk5ULTR++mWRC+zIq6dEWYYq5qowavWNieLEalmxnAoNqE7FiDt/PKgnyZpR4KjqAZoibkKMCgySHsr2VmHOhKFseGRJFmWbND7ljUqy1BO2TTxjROc7dBDTXXFV9SnDNgDGKsaQi9vOpekDRHh4B6XbtjbuPfQv9Qa/T2BxXYFRipVqiJMkiQk7URtnKnBJ9tQacwBOa6mmHFU57K4nTG+0tI2iJLb476VrqUq5wTjzqJr18YDECqjtU4xKTlYSGrMBjJofcXTsc8TD1mprZQannjXFUslx0DRcv8dvlH7a6F3J8dvlGoW514aekJbLS6hKOUr/KNdjVpx+Of5RqlX1DivoPJ/Y19H9Qlcjjdm8zWi6LYI4yy1keiX/VsM09Q9KeFfRqcoxXgpGUn5Det2cUZ2AqjP0qmij4Yn4cDbYHHtoG17LcNvmjUOg5glZufASPMb1z8Ll0dTyRjGntjN7l2tXF8ZBPKThG4cBRhuLAOw3pQsull7MCzyDiAAOEXnjNH/cRbhlcdxce3B+ul+1tQktyuNllI9hYfUK6XBNdHDGbt7Kt70nveQmPqVfsqxZ3l/IN7hwPV9Qq9FpCt6R51cSQRjAFc8qWkdUFauQFuPfC/CnkP7xH10Jju5C7AyOdwRlmPI+dMN9PxUsvCUcsBt9NNBgyR1aRc6SwcEwYE4cA+0UDdRTPrepxXKwpEp4h6ODjOAPAmhN/p5SjLJFNRYcOGUoua8AxhXGKtpaEjNee9PGl5or7U3uibgkiXhI28KK2el9ZHkAk4qOYcfMD+fKulvimw7KpT8nNzSeiJNLkGdqo3GmTk7CjkepngLYG3n9lU4ulinYp7K3Gth93loI6BossOWHCSwwQ2+PEYIqCXoKXYs77kknzO5pjsrwOqkAj2UWQA/8Ax/vSe40bhYlxdB417a+vehysuBTsYh/IrlkrOTewpJaELT/c7MgZt8A8PfuRzOCKXdf6MmBiO7mN/rrUpW4c8LsuefCcZ88Hel/XtLd0PD6RPeefnRjKXK2zSUXGkjN9JP3wUZ1jRpHwyJkeFfW3RC7DZEefI006Ql5E4VoWK9+Aas3vRBdbM/fSJRzQioltm5Y3rc+rVh6cY9lV30W3JzwD2UOckFRg/JjQtnHNSPVUDA53rZb7TYT+AMCh9z0Zt2QHtP055Yoe4/KN7STtMzSMrVuK2Ru2mW86GpgkNilp4OqcqDmiqMyCUBTgVzDbtIcAEnuFXLSMMxzzonp900T8SID51rphUXJaFi40+RTgow8xUPvN/imnO+1dpW3RR5VEOMNjgG9B5UMsDrbFD3u3ca7jtHJwFNN8WlyM2AmTUw02VXwE3HhWWVvwF4Uv5IUINOkLAYwaMR2ZQ4Y17rTPG2/ot4VTWUvuzEmmeyS0N2hzIp3o1fayOBkVgCwwPXSAJccia9kuD2mptbNKTob9A1M2DOZCoyQQwBY9+Dg+ryqrfauJbhmXbJLMFHCm42wOdUuiF9C0wS5ZOrUM+HOOMqBhAe/fYVxrGOuleFT1PHhTwsANtlORsR3GqIS7G/SJwVxmqnSFwicQNK1tqDJ+Fiota1RmXHFUJYm5XZ1xzJLolsukig+kR666vddjcEDmaULfAbei3Wx4pZYIqSey8PUTlB20MmmLbcCe9xJLeszcaKGICdjcuEDlv3mg2oay4kZJFKspwQdiCKNaP0jFpGqwwZmKMsboAfhtxNxjnnZew8uygmpkzyNJN/SMctnY08oY/wBzWyODJlvhF67CVpIrR8WcVD1699UX0zERKyN5A7UH97N8c1GOKLt2dc/VThScS2NVcc9/57qIyE8IbPOlgyVNHevyztXXTPNbQTu710Xhzs387VWtoM4PiK4vJ+NV76KdGdPec8K9hBNF9CJbHuwtyqKPAUYtotuQ+avLazKqBjkB/POrsWR2H+KuOjsZx1XgPm+2uHh8vmq3xnx9jf6a+4vP2N9lUjEjKQuagvDvVe31VeRYijepLty/n1mlUWwaUA8vVTNAixmt9SP4L/QaMWOpE8+E+qgkGlp2VMNH7QxHlWi6YZK0M3Ejc1FRS20XdQuGwYD+kb21WvZOBSS528ataZz00yfUpIY1OSORodoGp27wMWOWBIA7T3YFLV5eCXi9IkeqvNGZ7aLrViJBOxPLflnByKlOfHpF8eNT7dBjpDKXHBGuCeZ5Y9tLdv0T4XyzZzud6+u9cediz5Hgu1dWVqz7gvns3P21JzyHRHDi8tHWp6ZBFjgVuLt5/XQ2K56tuRwaarno9OhQuwPFyFCtYgEfoSYBFTk8vUkzqxL01JxktFWOGOQ8eMYqL7plJQ3DkDaq95cRxgcL5zzxTH0O0K3nQSO2ST8HOKbFHIv6/IPUy9PLfn8HOndL0STLJgb/ADim3QJ0nZ5RjBO1EbDoda/kh7BRt9EgjOIV4Vxv512xT8njTcbbRivT+yxcHI2PLalcLiv0k+gxSYLAE+IqvN0Xh+IvsFNwMslH50LGp7ZOIgeNbfc9F4DziX2UHvui8KsBHAePvAOB66VxaHU0xfsLZbKRZUjWQ8KsoYekGU8QZWAOD6jyodq+vXE8j8cQi6303XDZOeTeljn34pu0zSzDqEIfiKtFNgN8YAHIHkDXfuxxgXMD/HgA+S5/1UqM67Mq1EUMKse2i+oLkUJVjmjYUjnqDXhgNWA9dh/CsYZPc7nEcyswBww59xqb3VLHq7vjXZXGRjx/k0I0OfhkHjsfqpx6chZrWGT8JPRPl/P01mBaZmYmbGOI47s7V91x76tGNfCvOoWhobZ2/Rm4H4H0/ZUtjoE2GzEdh41tlta8MIkbBGMk1D79jHwVz5CuGfq5x/idCwJ+TCZbCUc42Hqo50LneOfG4yO2tVkt1kGOr2qhL0cUuGX0SPKnXqVNUFYOLs7i1NxzGfb/AL1YTWB2p9H2V6+mkdgPq+yqN7IkW7+iP3qMW/JpJeAmuqA/gf4a79+Z/B+j7KDJcIRlW283+yhUvSEB+ED15erKUTmk6GG8lYjYAev7AKWJWxMvEw5+P1mrj6wpDcth3faaU5dV45BjPP8AnlSqal0hXNRNPt8Yq0i+NJS9ITHgMNtvOj9nq8bgEMN6FrsfmmGJQQDvStqpY5FHjJkZB286D3x8KvqiVuxPnVVOM0WXWcW5hLEr2DA7BgbgZNB9YjJbPCfVVRFkkZYogzOxwFUZJPcBSTjZbHJLsgiJL4HKm/QDhgPKr+he5PcNhp5ki/RUcb+s/BB9tO2me53bRYJeVyO0kKPYoplF2I5Rpo+19M9Rjv8A8tZj0+B64+r6K3X7locZXOOWSdqhm6OWznia3jY97KCfnq0/1HNii4O2flm657mnbQwEhXOMdhOcfKHKtu/4atfzaH+7X7K9GiwAYEMYHcFGKm4Wi6ybM90uV9uF5h+xIrj2PTHbTS9s0v70QP8AhFFZNAts56iMHvAx9FR/cyNfg8S+Tt9tZJoWWzyKd/yo9cTVMLlvyg/unqEwgfjJPlfbUQLH8G69qf6qaxOJZa7b47/uwkf4hVS4eQ/nBHi0UY9oOa5khJ/F3B85QPoahl9aIPhQRDxnnLfw75rBoBdIdQ6i7tnHCcdarASGQjiiYbk+OKK9KSl9PbLj4MEmfPKUt9NAB72IMeA+B1aFEGdsAn4XOiejXAa4h/s5B9B+qh5G6QO1foXGI2bOMAmstMfpEeJFbX07vOqtXPeMVjMHPNbyUT0TixbGaiMeKKw3OdqqXZXi3PfyG9YCK8Z4SD3U3T3PHBw94z6xS5o/AZFMiqyEnKlipIHiOVMFvEktvJ1ULBowSW6z0QM7DB57UWheSuhUWPJAzjcDfzxTX/wUv53H8lf/AHKoT2VzYJFc4GZMqpIBG/Z57Ua4NU+NF7F+2twbFll4+DX1tU4eHAx3VC9inYoqKO7kP4I9tWFSVu4VnGLVNG5NO0LuvXnUMFCFsjOw5edAJtUmcjC8AzuSRTPrHQ2Sdw/vp4xjGFVDn1sDQa69zlyN72U/JH0KK4Z+kV2jux+q1TR90gunS1ZofSfG1Z1qOpXFygMvohOY760TRugl1G2Bd/eu0MvET5HNMU/QC2lHDIC2eZHo/wCHFXUJNEZyjbT2Y3PqYaNIojv21a0nR5FbilXbnzzWlf8AhVZKcr1gOefGx+k19f8AQxuccudsAPuPmpJ45RVRIcFLsy3pDOCv3tcb4NcaNANmZNwc5q5dWVxFK0UyBe3I3UjsKntpi6NaWJ+KIbNwnfltSO0uBBt3oSukBJmznY4o/pFzCYGVY/TUe2pb/okbdyLhxkj0MHY+2q+naXLHLlMMMb71sjSXF+Bo8rurB5vZ+MKXK9wpsv5T71yGBcDelvU7lpZG4IwCnM9tCbZp5DhFd/AA4oqLkOsjj0ixZ646nDqDmmHodxR3XviIBmCtmPtYNgEJ48qpxdErmQBuqEf7R+qjVnp6Rq5LoZFwDsSuO3ixuPMcqaUuNFsalLvofbLphb8pi0J7RIpUfK5fPTFa6tA4BSWNvJh9tZbLdyiL0zL1ZHN4kv7fAz2jDqPAkmqVlqVsT6B01z2gSXVmfWh4lBq8ZtiuCRs5n7t/IZqJrhvit7DWfWkwPK3jb+yvoG//AKKDRWB27LOf1T2p/wA1NyFaGrrn+I3sNecTfENL4kf8yn9c1sP81RTX7L/6VR/aXdug9fDmjYBhc97AebL9tC9QvYo/6SdR4KGYn1AfXSxe9LODZn0yL9u8lmPyI0GfbQr/AIlll3hnkkP/AEGn8P8A++44sedYys0GzhEihlQgHk0vb4iJTuPNhVo6MjElmck8/TZRnwAO3lQHR9YkEaAiSUgDi5O4ON+Jl+G2c5wo3ztRGLphaKQskvVseQkBXONjgnY4opoPFsJLoUH5IH9olv8AETUsekwr8GGMeSKPqr6HWYH+BKjeTCp/fIPI+yiCjk2i9qr7BXhtV+KvsFddd5+yvmc9x9lEBXuLCNxh40YdzKrD2EUJueidi/wrK39USA+1QKOb9x9lcNExrAFC79z7T25QFP2JJB8xYj5qXNX9ymF1IiuZEPZ1iq4Hlw8JrR5oHHao82AobPdwqcPdRA/FU8bfJXJpXQyswXpJ0MvbBesbDxD8ZGeILk49NSAy5ON+XjQnS9UuWDQQq0hk5qiszHHcFya3zpQDLZXEcIYNJG0ayTLwqS/o8CKTks2eEHsznsqH3O/e0NpHFCFDhfvpAw0jg4Z2z6RBIOM8uVC90NWroznTeiGqSQCNrNhvlWmlVQvlGWyD6qs/+HGrd8P98f8ATW4wjNWOpFNQlmMx9OSki43HIg056f0sRwPRx66wCWR++iml9JXiwGGfGpWy7jHo39deU9lC9Q6TqudvnrPrfpIzLsPnpb1/X3yRtnwNHlYvCjX9B6VFycgFc9nMeFNUGqod9xWH9ANTRl4WYq2TntByedaZZspGzg0Iyd0aUfI0m6THMVRm1OIMF4xknAFDJx6PwhStdFBIPTy2cgDwpmxFY7TWIkyWUY5DNdWejRRkMqAHwoZpusHhHEOL6f8Aei0WrRdr8P7W1LGK7DKfgh1jo5Bc461OIjlnsoNc9FIYQWigywHLiIz66aF1SEb9YnyhVTUNZiALDic9gjVmJ9gp3FMnozro371uZZk969VJGfTVj6RPbt3U2xxRxjCIB5Csq1uw1Wa+kvLe0miyRw4ABwBgcW++aPWvSfUYkAutOkfvZFIPsGQaSuPRVU0MerXEhZUVsFj2DPt7q+u9NWJA+6tkbqvEc778H4QxnahNj7odkhxIksLd0iHarl5rcF6OGBhKVwxVSUkUcgyE/hA1ye3LlykdfOPGolSOJiC0MYmzsXsZhFKPOFuTeQFds7jaWe6QfFvLFJv48GoJLWKR+GXqJTy+/A290pxsBKrJx/KY9ueypLW2nj3WPVYQPze6W5j8wHUnHrrpijmbJIobf42lEnnxW7Qk+fAoq2mn25/F6WfKSQfTIK7TUZh8K6v1/tbKN/aa7+6vfen97TlzTpE2yNrC3H4rS/XK3/uVSnSDkPuIPA/fD7PSogdVPZfH93TQTUT6lO2y3OpN/Y2EcfzkGmFKIhm2EN1DH3e89MaT2MIQB55obrmmMQTd3N5IuOVzcRWkLf8AaDPIPIKKv30NwwJeLU5B/wBVew2sfrVMGle86tGwnvGNzyEKy6hcZ/bfKg+sVhkNWnycCovA/vYBeoeCUkcPCD8F3DnGSMA79q1xfzNO3DHLZ3SD8VdqqTI3IjLKpzjv3qLTZGhK5eZONEPGU44pMKAetiAPVyKcq2Afg745mTUbBZwZZLBbg5wZLKUhiOw9XkgkdoIHrqZU8j0Q830g+cE7EeoK5q7DaRLztr+LyYn6VoTbpZJ+Mv7Y90kfL5IBo7YXKfgau3k6yD6SaIGWrcQ/lb5fMr9lXojF+cXnrK/ZUltcS9mpRHzI+tTV6Kef8+gP7y/6KYRkEYj/AC10f3l+ypuqiP4Nw3m/2CrSTS9t5EfIr9S120x7bsDyGfoAo0C2CrizUj0NPeU9zu5B9TEChyrexAkiw06LvAj6z2nIzVvWLyDhIe8uG8II3Zz4Ael9FAItFizxQaPdTtz6y9lWFB4nck/JoDoh1DWIV43jmlvZ1Rz1jcQhTCnfJ+YAAUHhuYnHWSI4P5xBzB/XRjdW7yOdE9V1AhJEeWB2RHYWtov3iPhUnjupu0Lzx2nspf0t+GNZGSTGB/zFv/SLt8G4i5Njv7aUzGWy1++U5triC7j2wpYLIPDB7aKf8a6j/Vze2lA20Vx6Si3uT8aNjbT+teRNe/cZvze+/v0+2imwOhF63PwgD81crCh8POo0IPI11uOypHXVk7Wpx3+VVHtKnjkxyOKnW5+MM1lKgOFla3JiPEpxTTpHSpuR5+dApQjjbbzqNbEjlW5Jg4V2PF50kk4M4HrYUj3fSOQSq6n4Jzsa8khbtqt1Sg+kmR7D7RRT+xXFXo1XQukKyKCQpz6voo09/ERuo9prHYbtYhmNmX9FhkeojlV0a8WH9KB4EN9VGMhMmI3HQ4LZlDxqhPb2kHu3o1wgdlYz0L6QKRwFwSDzGRseVaNZamCPhfPTqd6YksdbQxhdjUEi0Pa/2+FQjVNYCg+lRbQqTBfulSWotZOtRXfhPBgDIbsIPZvWae5tcLxTK7BSVUglS4wp9IOo34PSByNxjNfdOtc608APnV/3LIQyz8C8UylCVzws0WD/AEbdjBhnHlU3+3RVXexunVygLcTxAZDGNNQtwBvlSCJ4j+jxNiqdktqzfexYlv1V7cWkn9zMpA8s19NaxvITHjru0JKbG7z4qfvUx8RzqfNwu0s90q/FvrGO4HqnizkeOKK6FaDNvZy/gpfgfqr2CQerJBq4kdwP62+VC3+agUHVt/VbeJjlib5kFXUjT8lYfu3Ey/5qKZNovyRzn+tz+9Cvz5odeWMpHpQXzj9dqEcQ9fCQa9kgQ84rH13E7fMGobdrbruw0xfHqZpj/HsaawUC72KCM+lHpUZ/X3M17IPJBnJqpc3MjoRE91KmPg2tsljbjHY0zDix6qIHVdsQSTOe6xsYYv4iHYUB121uX9KeMQr2PqFyXb92EnOfARmsMhpjuxC54n6kPv8AfF6y0mbllmH9DKMYbcZIzmvr6wiYmR7W5iJG09k/Xx+DAIeMdhxjFcyN1TlTP1LsFyZlD210OEBZJABhGIxlhio7my6vEhtrmD9dp0nWxH9Ixb4HqpEUZPY37jCx62hPYlyhjbyIkBNHraO9btsJh3jgOfmFALPVmf0V1a3l/V3tv1b+RJH1UWt9LdtzYabN4wsqk/RRA/yGobO57bC2PkI/9VXI7af8whHlwf6qEwaURz0tl/YuWx/C9XorJR/6K4H/AHpj/mpv9/tCOggkE35nEPkf6q7MVx2Q26+ePqqrHaL+az+uSX66l95r2WRP7Tt9dEGihq1xcIp49TtbUdpUKSPIHG9KN0bKViHudR1R9vvcSyCHs55wuPImneWymG8dlap+lJwt9dLOr38y+jda3b26/kbQAyEdwCDrM+VKOnoGaokiQtG9vFZxMjdXZxkPPOQpwZ3HKMbEnbl20q9G7wJBHI3WqvCF6+HcqQMFJozswz81NiwRRxSSRwyxQkYlu7oHr5wfxNvEfSJflk778u0L+mabcQpx2rZZAEmiHpFWXZgyH4S5BwwrAvReayS5HEI7e7/TgbqJ/Wh2zXP3AX811D+9Shh1W1YsJ7ZoXOzPAeHcHOeBuRz3VJ1tn/WF5/FQMZlhkweWdxVmHUWHMZqtK+fIcvKu1hHBxZ7eVM0n2NGTQSS5RvA+O1WAh7DQU5kYAc67Ezxnn6udI4fRWOX7DKt3iplb4pND4NSBHpDHz1aThbdTnyqbVdl4tPovxXR5MAR7DUyGJuRwfHH08qGZYeNdhlPPIPjSMYIyabxb49lUJtJPZX1vKy/BYjyO1EI9XPJ1B8Rz/n2ULkjOMZARLeWNgwPCR29nrpo0vpBMuzkDubJIPs5UOdetOItyfwe31Dt9VUZbFs4IIPaCCKflYnFR8DudfJH/AJmAfvnPsxSlr2uSueFH4u8gED1Zqg9m9QPGw7PbVERaKDxsdyd6evc5sgIJpWfhzKqBsZVCq8QLgb8J4yMjlilIsO0YrQPc2vAIZos5IbjK8HWDgKqCXiHpPHldyu67HtoSeqAl5QS1iWQIBciN4z8FrmMzwMP1d3D98T97ix313ocxH9BDMF77G9S4T+6f0x5GrXvcIDLbyTwKfhPbZu7Ynt41T008Q6bVVgginbcaZdMOZR/e02fHhKYPqopaEbQfXWD+Ma6X+3s0b5+LevfutB2vF67L7KgttJkX4NteRj9TeCRfUG4qtrazjt1MeqNvqFMrEdFeTVoOySD/APCB+kiqsurn8W85/wDt9Pgz6iSx+aiZtLg8jqnqEK/OTQ+702Uj74t9j9df28K+vgyabYugRqV3dMuWh1B1+NdXaWcY81jEe3hmk25vSHIje1SQ8hZxNczN4GeTO/iGpjvrSyiy0o05G75Jri/fy4RwLmql/dnqzwpOYscysenWpHgExJIPDiJNYNoZOtZ8IqJOrDjNrKeGVeLctbMdyuc+iMkHbFCPe0EUv/L3slnIdzFPxKu/YXXYH9pc1NqkbM2DwHiOUSQ8MbkYGI5cgwzrspGRnAPbiqlxrDIRDcMU7or+Hr0/7c6gOB4nNSTLNDJbi+cDrI7e7X4w6mXI+ZvmqeOxi/D0wIe9BJF9GKAWdvG3pLYk/pWN0sg8+CQhh5UWt9Tjj2N1fweE0EvCP3vg01MRhi3ithyS4T9mZj9NEITF2S3Q/fH2UNs+kcbbLq9ux7nKg+wii8N+zcru1b95Kdf7oRpkqyR/lrj5QrmWaHte4P74FTieT8tbe1ftqG41TgHpX1rH5vEPpog2BtRgt3/+nS3HhI7kH1DI+aqsFvfRqTbafZWEY5yOE4gO/JO3rWiM971vLVSw7rZHkPq6kGhs/ReA/fZo7qcLv1l5KIIl8zITIvyaFDAZ2R2dhdNfXQR8zn/ytqhU8Ugb4JIGcBeZ7qpWjx3MaXHWNbzkLmVc8JbG4lA/o2Pb2HY0Uvr9ZVa2tOrIAJYxKUtYFAyZXdvSuHAyV/Azg4JFLvRz0LdGcSIFUIZUGWjIH9HcRn4SdoPcawrCl0LnH/M2kd3H2SxgcWO/iT7BVLhsfzCX5RojbwP8OHDj49pJwnzeBjjNT+/bj8ref3C0DIxC4tJI8caMuRkcQIyPDNcwwFjjl21oXS5i2kWrN6TcQ9I7nk3ad6SdQ24cdw+iinaGk6IOsUJjHpA86jSJmyRvjnXMXMVajOOPHdR6BZEeHg7mzyriNG+EMjHaKjNWLQ/C8qz0hieDVHXZgGHsNEYL6N+3B7m2+flQBOdeNSSxplY5pIZve/perb2jlXXARz/n10HsGOwzTDBuDmuedxOrE1NFfhU/7/bXY4hyJ+mo56jiPpCh+RmXkuyOag+VSLLG3bg9xGPnqGTlVZ+VZMDii5PBnlv7KotE6sHjZkdTlWUlWU96sNwa+hchgATyq9FR5NC8UyxbdOJFbiurdZX5dfEzWtzjxmgxx/vA0wR9OLOYffZ5c9gvbOC8UeAli4JD5nfalKUZzQXUUAOwA8hVYTs58mOjWLbVrE7rLpjH9u8s/wCEhwKJwapBjZ7H93VD/nhzWFY2HnX2KclxNyuNVt+17D97Uyf8EOaFXms2S85tOU+DX13/AArwKayQCvQK1h4D/c9L7SPPV3EuT+Z2lvZg+cr8cvrpV1HpArsXjtV4sbyXDvdSbduZfQ/gqoEGOQqJ+R9dbkbgazxFxv1auwRZY5jmCWQKBws/4qfsDHHFsQc5Agu5ViIgaY22R/5a/j6+1bYZEUpGVA5Z5eJqaAZ1K1Q7rLHEJVPKQGLJEg5OD3GiXufxiaa+t5QJIEkYJE44okAHJY29FR4AUsexn0DYtCBHG2nNj8rp06zJ5iNzkeQFXrS+ij2GpXEH6N1DKnztt81Z90ikNtdSe9yYcPgdUerwM8hw4rZ/c8u5JoB1sjyftsW/xU1rlQrj+myra3DyD0buynHjwHPtWrqaUx52lk/iI4j9dMd1odq4Je2hY/pRIfpFLF/o1sp9G3hXyjQfQKpsjotJop/q+19UUX21ZS0uE+BBbx+Sov0ZoJFYxfkk+Sv2UasNGtm+FbwnzjQ/SKJihqVxONpNTggHcHQN6sYNBF6NW0z8TG8v3HI8LKm/dNOQMfstWl22nwxj0Io0/ZRV+gVjnux6lMt1FEs0gjbPEgdgjbfhLnBpHoeKsL31yqYtoxD1hPo2tueNFYb9bez7cQXY8AxnHbzC9pF+I44nmdgHUdVeIOJWB5xXKAYbhORy+2rdrGI9FvHQBX6thxKOFsbDGRvjc0V0qFffd1DwjquphPV4HBnhIzwcs4AGcdgok5MG3Gjxv996o78rixcH1tFnIPgM1H1H/X339zN9lIrXLw3yiJ2jBfB4CUyM8jw4yK2Pr2+M3tNBbDK0f//Z" alt="" className="w-80 h-44 border-0 rounded" />
                <h1 className="text-center text-[20px] font-bold mt-6 bg-slate-400">Catering Service </h1>
                <p className="  text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dignissimos illo exercitationem? Inventore dignissimos.</p>
            </div>
            <div>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBoYGBgYGBgYFRcYGBcXFxYYGBYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA+EAABAgQEAwYDBgUEAgMAAAABAhEAAwQhBRIxQQZRYRMicYGRoTKx0RRCUsHh8AcVI2KSM0Ny8RaiJURT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKREAAgICAgICAgEEAwAAAAAAAAECEQMhEjETQSJRBGEyFCOh0UJScf/aAAwDAQACEQMRAD8ATU68pcaj9tHVTREAzpZdD3H3kePSIKW4eCaYKWoplqF0kF9CPCPId3o96rRdsKxxJlIzN8If9+UdVuEUVSO/KTmP3k91XqnXzjz41ZR3OVvrBNPjKk7mE+SdoR44yGOJfw7WkE00wLH4VslXg4DGKdiODVEg/wBWStLbsSP8g4i+4fxQRqYs1HxEhQDsYeH5Mo9kZ/jN9HitLNYO8FyF7tHtJVSTPjlSleKEn5xGeH8OV/8AXkjwDfIxT+oiyfjklR5lhagJiEtdVvX9IsqqNNIyJdMSGDqSzn1u8WqXwpQhQWiXlUGIIUv5Et7QHiuHFE4VCVBUwDKAsZkAc8gID9YllnGTX0PiT9FQw/hJEyYZqvtSTMUSkDMlIfq2kW3Dv4eoDj7RNfVhOmW8QCIWVvE9dpnlja0sD5kwmOP1mn2hY2tlFv8AF4ZZU5foPhyNdI9CHAspg8xaiPxKUoeilQJO4QZxJmy35ZU7bFopX86qla1M3/MxuRiE5BzInTAb3B583ECc8TfWv/Qxw5o/8kXjsp0mXlmJSNbpDJ8oilyXCj+Ej9+8VxPFFYzKmpmDcLQkg+gEd03E6wCFykqB/CSlvAF/nEpqPL4vQ6x5EnZY1ynW7tbXwaK7iswiekAhiluTfWzwcniaUWdK02ALgKGz6GFWNVMtcyWUKBGpLFwwLC+m0DS6EcH7KfWYeJmImUpKUoWsJJSSFF0h4eyv4XUys39SYGJ5c4VZv/k0LIUAZqDmbu6Jdz6iPTqlSUZmO5OvhFZZZR6ZLHjW7Qiwjg0UZeTV1KA10hQyHm6CCk+kMa6kBCQZaJlzYjKOpIQw8m3gPG+K6eSWKnLaC52gCm4iTUSKhaHQUIUkE81IJB6GJ8sknbsq4RiugefiQUhc9EuUlCVdnaWAQR3SA2ofc+sKqmbM7RLyWC0JyEEgAKZgEtqwUT4vEfCZQjDpnaqBMw5kjU91h/lvDmdjUmeoapkyu4C1yspuGGwSPeKdN/pgW0vRVuJeIZk9CEFQKELmFgA+Z2JJ3tpBHDUtK0MbK1SYR19AUKOQKVLuXY6WuYc8PVqJLTCQ219fpFZLlHRGcNsd4zISumzKtMlrBI5g2zD1vFOoahCDmy55j91JDh9mSLqPSGuP8YCcezQnK5CS5d3MNKDD5VNIEwhOdYdUw6sdgTp5QijxWzI4tvQvp6lSCubNJM1dndsiNwG3O/QQJWcXrloVLkWUoutd3DaBJe7czCvGMVCyRLFvxbmNYVw5MnpKwO6k35npFIpRVyLRUmuMR/hCAqUmoOZa1PmKu8oXI02dn84KosZVSThUS0FSRaYjQqlmygP7gQFDwgGilLkFiDl0blDVNSk/L9WiSlUrPQ4XDiwtWEIxKsmT5C1iTMGZMxIuhQlvpsQpI9YHoOFpsueqSuaAXAzhOYkqu+XUONxCKtqa2XMCaSYZKU94FASkPexUBfXQuLwwpP4jzpa0nEKJE1SGacgdnMAGmndVvyjU4rItGLi4Wmj0CXXrpwJCiHl905SgJ8gQ4jI8rxbiKlnzpk4Tpic6irKZanD3Y5VN6RkT/p5ATjQTJQG1LNptEkirTJV2hKgQDlAa52d9oGKlfcbxMCT6VRLkuef05QiR6CYXOmBRKnd7nxNzECpkCYsAnscqilTEHqxcP6wP9pJLGx9j4Q/DRJ5KdDeUuD6eaecJ5C4OlGJSgUhkHUmoUPvGDZVav8RhHLXBEucXiDgV5lgk4nMH3omXXrULmEkqfBUudE3ENr6O55eE834jDvMDC+pSAYMHQ1gyBEqBGOIzthDM7kTARgSY4TOjrt4WmHkjrKYxoiVP2jRnmOpgtBaCOUShQ8IXfaTGlVhMdxbBaC5+DyZl1IBPM6+scDBpWQy0hkE5iATctlc+URSq60dS6ovaGXNaEpSZNIwNCAyRb2jSqMJLae0Eya9QGkELWJibp13GvlAt+w0l6KvXcQU8tSpYzqKXBLWfcaxUK2ZLKiUBQSbsWYHo0Wqv4PSSVS5rEklljc9ReK7XYfMlECYluR1B8DG3Fw9Mx5fJW1oDJlk5uyOb/kWfmx+sTz6qZNypWpSgLAE2HgGiFUT0Hxpi7WjIruhngfDy50xKRbck7DctHotPRpkoEtIZI56nqesIsCmpQLggneLDOmZg51+cedlm5SpnoQxqKBZslKrEP+7QsqsJs6dRDSolsyhp9I0nnsfaJ20VsQyhZv3eIp0pwQQD7giGNbT5VWGvz5QEtVufzi0ZXs5rQoVhEkl+zTGoNXUISSCkOOsZFuUvsnxX0L5dSkakesR1OLykC6gfC5hBUyXMKKiSUlovjxxZlnnlFBuJ4gZqwdALJHIc/GGGGzwsd/VI15+cV4QXJmaAa79Tz8Y0SiqMqyNu2PplUUtlHrHScZKfu+8LEqLQPNrMtrGEWNMfm17HZ4kI/wBs+sFy8bJTmKG84qVPNUtYA0/LeHM0taJZccY0kVxZJNXY1/8AIiPu+8bRxMo/7f8A7fpFeVcxNLlnaJ8FRTyS+ywf+TrA/wBP/wBv0jtPEC1f7Q/z/SEpR8oc4Jg02coIloKlbbaeMDgvobm72xpQqVMZ2T5kw5w3h4rV35gy7BIIV5uYFqcGnUgQZ6Muc90OCbM7tprFlwGhqFsvs1CW1i11fpEJwkukU8kfshHC0v8A/ReoGg3gqTwpJdiuZ7fSGypRBQFAi+77AmOzYnlrGfa7OcvoQfyKnEzIrOxLBQL8tQB1ifGeHJMjRC1WcHMWbaGArnmgoDH8dm3uxsYhq8YmKIROZYBsoAAHqUiH5R4u+/QFzcl9AOH4DJUl1IvqO8YqnFss0eZThQUAEA/dL3PW1hF+SvQvu2nOKJ/FWSSiWs/C6kq6XCgfmPOGwO57OnJ0yiorZ2QzTNX6hnUTlZPlGpfEM8N8CubpufQwuq0EEcm9vy1iakq+xZYQgl7ZgVC2to9RwT9GBSa9j6VxctOsq3PN+kFS+LpgBypAIALG+sKBiCJqVf0sqipSkhLME2B9Iio0JUopdu63TzMSeGPtFo5pX2WKi40KwO0QBfVOnpFjpsZoFoPaLASQ2Ug36ZY8ykpZLdf1iVSrecSlhheiqzyppndaEFa+zBEvMrIDqEucoPk0FcPzEJqJRmlkBQKj0vAJTHChrFaXGiG7s9emUMpasyGZQBBBs/SORIXKOrj1jzXDcbmymyKNtjcekW6k43zpGdDHdtHjBLFJdG6ORMczTz02jpKW00iCRXy5odBfpv1tEklWoOmv78oSvsezU6nzBt9esJ50sg31e/j0h+k9IX4nJDhW5GnPlHQdOgtgH2dP3sr7xkDknpGRpoSyogWgDFJNnG0Fh9zaOiHsQQf0f5ERaLa2ZpJNUV+dKsFDeOEnflDWZTZXSdNjCpaWLRrjLkY5xo6nTFHcwKYNl97u77H8jES6ZQVlIIOkOnRNoMwmWzr8hBZmPHQl5EgREgXjJJ8m2a4rikgullpuVBZ5BJTr1fSDqCimz5gl09KtRP8AcCfEnRI6mO8EolTpiZadT7cyY9x4TwyVTywiWNbqUfiUevTkI5ME3xK3w7/DCWll1SitWuRBIQnoVaq9hFylYHSygQmWlPMJcHzCbwVOrAAbKIA0TqdtdrxHi9VlkZZYAmL7qUm12dV20AeE80PTJtSl2I8epaZQQplzFJtLQZutwCBmdrsD4RPQY0JQypQs6nK+ZKAOaha5Fm1hb/4/TkCWFTFqlEl85+JZvmA+EXBa0S4Tw+hE0LSlWZTiYk5yjNr3XDNr5xieSbdqWy/DGo0W6VXpmWCVaAlRSyA42UWznwgXGcPSZZAYKVoep2g2WZbEOGTYg7dH5QqxetTIlOlQvcJUSf8AEaxebfH5bIx1LRWAg6EM1vTWOqXD+0UEi2Y76Dn7Aw4x2QRJlTQm5SAoci2YfnEHDRJmgf2qv5frGXxVk4s3LJ/bckGyMGVlCc8tTaXI/KKx/EXh6sXIAkShNv3wkpKsrXZKmfTQOYvFclKHLAeUI6vEi2hHURt8WODTMflmz52qZ0yWcsyUUkWIUCk+iogXUII5dLx7nif9YMshaRusBRHreKdX4hR06+7KlzJiTsAQnxewiv8AURukjlgclbZUcEwyqWSaemWuzOUnIx/uWQIayeEJ6SlVROppIfM0yY9wXAKU294nxXjCqmhs/Zp2CLN4E39Gio1YKiVEknckufUwVklL9f5HWJR/ZYuJey7YmVNRNCgCoy/hSr7wHS3vC9It5wDSWB8fyg6WfygS+jrtm16RxIlFRYatEs0/OIpA70C9B9m1yFJ1BH75x1JLFuekEoJG8YQCzjwifIvwQXQVCkKcWi9UM4TEONW9xFGpCgm5aLbhqMgBSXD67RHJTKpB6ZluTQAtZmKJ20TElYr4gNCYjpJqQ5ILNa0Io6sDeyBdJfeNR0usQT8QHrGQeUhrR5vSVWYaw3lHMw6b30YfkIqUtTaQ1w/EWsY9DJiq6PPxzUqssUun21ELMZwgEZkgCGdJVBQcQUuYGYxnjJxejU4xaKChRSq1iPyi61OKonSEKCUhRsoNZJT8WXkNIqmLyglZI6g+IiWjUUy77n6RryO42Y4qptE1VNcxpERJvEgMR9UUv2XvgmQEyzNIussP+Kbe5ePQsFrxmCSQGBUXOtwkD1L+UUHhucDTSm2BHmFGHFDUBM5OYAhSSi+ygQtOmxGYeYiE5NXQlJ9ll4hxQUReRL7eomuopS9k273Nn0EdzsY+00yQZIROIWoIN1Jy7uzjM+sIp+KzE5icpWbZgMqW2AB0blHnmN185NQSiYtPdZwS93cewiEak3GOikocIqZ6jhGOSqYDtymUrvJcPmWkE6k3BBJ8YZzOP6JIJzKBIFwHURsY8MOKzSe8rPzzsp79dYsNFT081KQkJSFEBYSojO1ynLcoTmYskh2ikcbgu/8AAspxm+i+T/4hImzGkJWu3dJsh21yj4vPeJsIMydPE2tzdxjLlpBIP9xA0HQwqw+izTkSZQIGZllJ7wDPa9kjT0j0iTQy5KckpCcxAd76aFRbXpFMWPlKwTmoxpLYJjWIyZkvs0q75I7pBSsAOfhIfQGOeHacF1aaDyOsVzFMQlzquah8yZCUSyp+9ndSpjHUMFJD75THE3jSTRIAmEqzOEkb5Sb+4hpU81v0ck1jpHo7J3Y+N4qXGfF9PSDswlC5xDhLAhI2KuXhFGxD+KCp6uzpUlL6khyOvICKBjE9ZWc5JWq6jvf9jyi8sj6QIYL+TJK/GpsxamWoBRLsWF9QBt5QCiWw/evSOEpaO1La/WIOvRoWlbNmVZ3gCoRDNem5bkLQDOEdB7DJprRxIDQbKSG1gJCmI8P+ollTdXt++kXatGdumHKIc7xzILk2b9APrHKFP0s469H5x3KIUm77sxAubBydue8K1SY107JZTZkhRsSAW6lvZ38o4mJUCQQXBY+LtG6KWHKl5ShAch2zn7qBv3iLnYAnlGu2UtaiGGZRO4Acvr0iHHRXzK9mJG2/oYOw/E1yjzG439YWzknMTmzdRr4x3nhWk+x45L2i7UddLnC121Tor/rqICqlEkgW8dj1EVkFQZSXDaEW0N2iyYBxGAWmIQpQDALcIV4tcGAlWhm72HScKWpILi/QRqIqvGapSyRKSOiSSkNa3pGRTQtz+jyPSO5R5WMW+owOXMJYFJe5Hhy3hPiHDs6U5A7QDdN1D/knURtWWMtGDxSWyKlxIpsoP1Fj7wQvEXFlt0UCPfSE8aMc8cbsZZZVTCqt2DkElT2LiOkTCQ3KA820NsOpCUOecdOkjl8noiTEj2jc1IER5oh2ULFwhioSTJUWBLoPXdPnt4GH8+oOZm9ifQ8485UIu/B1esyJ02eM0uSAlJ+8VnQH8WUEHzHWJ5sdxtHQnxY9k1awjvJChzJCVj1sfG0VGpw6dMmTFoAmBywQpKlAbDJr6RZ5NYmYhUxJJSn4lMQEv+I6CJsOko7V0hJKdS7JY81CzRGPwGkuWjzcpUFHul3IbQ9QxuD4xaOFMJeclaUKLAsMxCQrmTu0XLHcJkTpIq3Sns3TOVzSPhJI03Ds5AHKK5P43p5Kcsp5jWASMqfU/No0cnNaRBRUWXDhamKpq5oXlcuWPfFrpDWSC2p8o44x48CFfZKNlTCcqpgObKoskhIGquaj1Z4ptDxQFIJ7PvKc5QSGf7oI8YY4JhjZZqUS5amYBnWOTnR+cDlwWyqx8nZYMBw1FLTFKiM6iVrNyVLLBhzYfu8cIwKRPlATZYVlUrKHNgQDGlSmdSiCo2JNtdfARJSzCrME7KvfmDGNyfaNSgV+swyTTlSkISkAEkjUDlePP11JWtSzuXj0jjIBNNMOpLJ63LflHnVH95Laj5Fzr0eL4Pkm32LmfGkSISCLqAPKxP6RpV1BLuLFxew1005ecQKQBMyXJJawcX09rwxnZEd1K8wABBZifxAjxizjWzI8rd2RLcG5YKAI7wKWOmn/AHC6pmXh9Iq5UwEKKEZUjNmSxKgACzaqJgajo5C5xCpuVOU5M10qUNirbe8dH3aHU1SQjzvy1+kOVUSkye3zhKs1kMLEHcO6Q/SORJTInImGXmS6u4S4PdI13BeB1ylzEISJd0hR8A7kqvpoIo2mkTcPlTY2kVdOqQc6z2pKjoQAX1BZr3iCgoRNzSlMlTHIVEpZewPv6tAsvDM2VjkGpPxDq7aQTTVKuzRLypKUrUQvL3iou4KjqlrQjpJ8SsIuUq7HGJ0KJcmTLUMs8kpSLFwdSsA7tqIRFBUo98AAkEEakWOmjERYpS0JmKWhIJNwkFyg20e4EC1s1KspQB2iT3UZQLE94qO56dYhGe6DnxtSaYDTUxKllQKW0GugFz6wLNSpBynXYi4PUEQYmTNVmMxZVNWo91wGYABzoAwsNGg/7OzBN3SVc8qk/Ex3DQZOmRjNxQuWsPlGiQBfpc+ZPygSoVyiRS1EkEd5ywAvbk2sQykk3It7QaNEJqSCpePzgAM2nPWMgZVLG47RXZYJKRZw4LancaW28YYS5gAJuGN2s+5JJ+IfSF9MoEWY8tbdHgiXOsLlri4L21cnaFewJnVbhkmce/LSXuFCytRbML3itYnwwhIdKimzlyCN9DqYsMypYEOejmxNywPk2mkVviLE7FCWzHXdnAc9B0iuFzukSycPfZV0i8OPtvdyi0K0y7wQlMaZ7IQJVLeNRsCNGJFTTxeOBJIn0tRTE5SVZwrm4R3T1/pm/WKPD7hKepK5gFsyfkf1HrC5P4ugLsuNJKFMhUlTETAygHUSzlgBrAiwuYMn9OQkGwKi9tMzawzxKtRStLDLqGHaK2Q4+AdPnzip10xSlO7v5Rmim+y1aPT+G8AWmWUkomoUkpWELfMFC+ZI16Pyjx7iXh37JPmSi5Aug80n4T4sWg+jq5smYlUta0qfUEg9N7+cPP4g1f2mnkVCgBMCuzmEBsx1fwdPuYpCTg6T7J8WV7BVZfhHjFppcW2f69NIplCS7D9sYNl1KkqdgBr+nlp5R048tspCVaPSf5DPmU4npULj4SlSX3srrAWEIUAvV7H82MAUHGc2XK7IJSpJAHeckMcwID3vZrR1hNZ8ZUbqObxZQf5iFyqKjoONy5bIOL05qdR2Kkm3jHnJlLUoJSnMouP34R6biSs8haAHYOCP7S/nvFBnT0hZB+J2cDKRuLjpC/jSaVB/K0rD6WRLV/VXMymWkFKTmPaKcJs1gW5wAunYBZTmB10BBO46ORf5RlJJmKU8tSgUDNazDR7u4By8oCxCat1G5666/rGmKbfZ596JmDMQyhq2t4kk0KlpzaNpp8XhsGED0BMxQAHIBz03h1WUYWhKJamyO5SHLFyczcybQJNxdM5bDKKg/pLKZyH0IZJJS17kOnU6QZh2FqEucEoC1MGcC6SHbw1gXAVFKsoluQLsMpZnJL66e8TVdVP7ZBloVKSEsSgpObdyNLRklzbasr0LFUoRMF8ga6CC6Tu3SJpdXLQf6Uous6kuL7gs6Q23jBEilVNK5oWqattSHI8bWgfEZMlOSYleRTgrlJWlQsSO4LuCxPK46xRPkUw5ZQbaC8FlBaxLJJCVFRyIKZrAOUhWuoAgWqrJk2a7oS+ibgISNEl9SYB+2rWtcxGZCMxY7kaF23aJDUoWATckW63YEkaR0oyT2Sm29s7+yIE0ggiztmcdco2HOCFVXcQpEsJWFMlSiSSNWfYHS0S1C5SCErS5YELcpOXcC3O3lAuIS0AJXTla0t3gSDkG1tA9w8BPk0IxlheMywt+wUhWZ1OdCH+EgnLfcCO+IcRpVpCkSpnaKsHIZGhUe7ZTmK9U/wBRVlKAYFQFgSm5zF3FhtA8qpMopSSSSMySoE6k93Vop4I3a7LRq04vRMVxuDJdSkgEykv4xkdTNHJhcmQp7em0R18xUt87pe7k28n08Is+H4c7Q9nYFLnSjLmoCknnseYOxiKzJOmWyY9aPHarGCskS+jq+6G5czCbKSSTe+sXLizhZdICUDNJJACgPh/5/WKqJUb4zjXxMDjK9kQTEoRHZQ0ESZLh2LHlrAbCkQlMctEqaSa75VHxYD3gmVTzeSQeZ7xHhtHcUvYdgkmmUdA/Xb1i38HYF3xNVOktp2aFiZMuRdYSe4nS9/KEP8qWq6lE/vltHcrCE6sXDEEG4blCSppqxlFlkx/DJiaibdyVHzfQiF8mQSrISE797S1zpFhosbSsJ7b/AFEjXZQG/jB6McpEZiuWle+VSFb9WtGNSmnVFnpCXCqMFSgcpF1JNw7am9x5tAPFVcgSUSBdRmZ1dGSWHvHdRjKsy+zlpQCMo5JTqwT9YrlUklQzO5BN9dRvv/3FIY3y5MDlqiGnnlCkrDEjncHmCNxF84bm0NQwXMEpf4ZiUrHXKSQR6mKEqVyjgJaLolJMu+NLpackCb2jEsEhKXfR8pJYcnvCAY6pUwqYJADJSAwAcH1tCSYm8dIMc0mFNou+C4klbpe7fN3itYnQIE89oo5W+EarAOx0DWjWA085c0CShSyPiA0AOuY6Dzi61nAvbhJnTAggv3bkesSVY5XdItP+5jr2IZlPNlSe2k05m05Ccywc6QMzZStIGVQVY7iEVOpE0tMPZq+E94JBPi7R6Zh/C9LKTkeYpJuQVnKSLglOmpgap4JoZh0UPBTDwaBHNBf7IL8V9s86xCiAS0uYlW6gAQddlAsR0ifC8S7JKUslruBY3OYB9Xd4uNVwTIAOSYoHUOAW5BmisTeCZ6XUlPaAH7gt4kPrFFkhNcWwSwTTtInmcQByQGLXB8YEqcZXNCihSRlLq0CupALM1oU1dKoMkLIyv3SLjmDAnYm76i7nc6NFI4Y92Rdp7HlLWBm7SYlxfKdfEBn843T0qXJBCkhn2VlBAYBXwm5bzgKXSVCJec06ihQstiE8wQvTQQTKxNOVUkB87B30LfF5F4WUGuhVfbG9RWIUJsrKmSguuWGcrXZISFaCzqPnCqdUp7Hs0fE/eItd7PsYNTXSQ0tdwVIIUNQoKu3kTDFNFIqSqXKlLJuCw5Aly3hoYiptNWjaoeaPdP6FUmqmJSxKVZRyzJcgOAQNX2gKZineypl/09HAOu9/y1icUqwClKgVuQoMbJYMoPuW8tIXV1MoktM7wAsbPq+lrMLmLQjG9meeGUY2OKOpEsqmICVhXcfkptQj4nZ2LRJ9mkBHezrWSQmUoFJT/cJgNgDZiLwqw3C1ZS+rAM+xPPm8NhQiWi6u0Uol0h3JGg6jeFbinpkVfYtEmqFhKcDfOB7PGoPOHr2UlPRhbpGQ3lH5yPQsLXpFoplAiKPQT2iw0VVaPLk2me3OFoYVtOlQKVAKSQxBuCNwekeXcUcKfZ1FaLyj6o6eHKPUhNcQPVykrQUqDghiDuIpjyuJlnCzxNFNmLNDSno2IGwEH41hX2ddrpV8CuQ5HrHVDLcg843SyJq0Tx46eza6McvDSJ5OGBw/iYJAiVa7/vyjO5utGhRRH9gGXTX0aAhT7Qzm1XLQC3yH5xHKlnKVHUvCqTS2HihVU08CJk7NaHEyW4iAU6iWCS+uhYhx08YrGSonKIFKpCpC15kpyDMH+JTlgkNc6P0iycLYzKVT1FPVyu0lkJysO+FFxYn4WYFxoYNm0KiEJlynSWUcwAKJgGU6+oIe20c0XCygsqKgkHYAk9XMF5lEk8bapnn2JU+Rak3sTrq2oPo0QS6UqNgT4Xj1NXClMVZ5mZZ6qLW07og+TIkSrS5aU+AAib/ISG8Z5lR8G1U3RGQc129osFB/DuWm8+aVc0psPB4t07EQNP19YAn4i+8Tf5En0PHCgilky5KQiUkJSNgNfHnGLnkwu+1RsT7xLk2V4UFqlExTMV4kmS5xlJTcalWgi401WAbwp4x4b+1NPpyntQGUk2zgclbK6GK4ePL5AyclHRVP/KKjcII6EiHOH8WFI/0XUWbvAC3OKZNK5aimYkpUCxChf99YJo54c/8AcbJYoVoyxzST2PKwfaFqmLyhRLltibWiKZw+4ex9miGTP6xIqtUN4T5dIrUHtgGNSVyZWXMrJ+HMcrvYZdDq+kVqmrciiojM7Po1jy9bQ74hqFTVolFmR3lX1Uq7+Q+cAroLAZEi1y6XJO43bTnvGnHSj8vZjy/KVIsvDZpjUpWCAiY6Skt3FG4IOoFiLc4Lx2ryVCkyVGU5OdUpk5wounMofEQN4qq5RSElSSrLqE93R2GcdA7xGuYrMlKEksx7rEmz7HkR6RF4bnyTJyuKpFqn9hJSO4zkBZY2AuVlYcqJducKq+lShb6ocFJJzZwXNla2taOsGSJqXWrMpPfVLJyk30Dg5n1sOnWBptEuYqYXBSO+lLBxpnASLaF2846KStNl8uKSimnZ1V4/lOVIDn7qfq7QDh+J1aZ4CFOqaycpYjKra4dPVo7rShKArJ3zYKAAT1LM0DUCpstQnSyoTUlwpN8u4t1i0FBLoxydMsf2eYdZRfdlBn3aNxX5mOVJJJuSXLgO512jcS8EgWXXD6jSH9HPijUFUzRYKKrjHlhZ72Oaki60k2DlIDRWKOthpKrw0Z9o6Ub6IsXw5MxJSoWPsecV6Rgc0d0AN+InXyiwrq33jqXUiGjkaVCcWL5HDhPxL9B+cFp4bRupR8x+UFpqREgrhB52B8gdGASh919N+UEpwqX+ARwqv6xCrEoHIFSYeiiQNkjyEdFKRCabiXWAp2IK5x3JsPD7Hs+pA0gKbirWhOqpJiM3gUynFDI4i+8RLnEwIgiNTqoJFywjuP0G0SzFc4gUYVzcbBJCUktubRAvGFM+UCKrFIVzQ0mLjBOMI5mPJB7wPleCKbEkL+BYPTf0h/E66B5F9jcT4Ko8QKTChE7naGeHICzCSjoKkG4rQS54BWkE+F4rNRweNZainptBuOcTIkEykqzTNG2T0UecIZXGs9JZSEK8HH1imOGWtEpzx3s5qcInocZM3/HX0gallqXMSi4JNwQQQNyx6QTUfxAIH+iQrqXT9YrmLcQVFR8a7NokAD6n1jVDHkf8qM08mKO4tj7ijFqQJEqUM6wslcwaNyf73yEQmqQtHeIQqzMUjMAzpTM+EkhyAW6PFVTLs50a/wBIZU9cFJQlyFIcAhnyliB1vm15xZ4opKjLkm3K2SmQ5Kk5mJLAnvMSwBNrsRaGciclISVIICUFKQO6XIsyhr5wBLqim48OZG2/SJZeIAkZmtfS+jN4RKTbOc010MV1sshCVJCFEHLMFlEvrdmAcQBieLzM11IVN/Gj4iEjIASLEEMbRxXKCikoAJTdynMPPrHKykDvJC17WASkndhfTQQYJVsMZvogk4kFZQr4Ul8pLgPdTJ1D9IbjF5Z7iUplpLk6an7oI1QNnuN4TfYpeRTlWYkEANk663gT7InQP4PDNQYPHIdKxGmFmJ6xkCS8JWw7ojIWo/Y3ikbo6p4c0tY0J6DIkDOoB7l2ESqWkEZVAg3DEEhvyhZR/RfHNx9lqpq5oOGIdYqVPNPOC0TTzjPLGma45iwDEesSIxHrFfBMSIJhHiQ/kLAK/rHRrztCmUXiZ4VwQeQaawxx9oMDZozPzgcDuQSZh5xrPAE+uQgOpQHjCydxGgWQkq6myYdY5MV5EixGfEaqoaOIpmIYxMWCMzDkLe+sbw2pIUL+sP4NWT86bpFwmzmFoVVLnUvEi59tbQMpZNo6MaHbI5YYv4D2jU02EaLv++URKXFkRvQrxEwuBvB9fC+LR6M8mHUuLTUEd5xyVfcb6iGVXxXMyZZSeyV95QUST/xcW8dYr6zcefyjlcHhHTaOWSSVWbmEm5Lncm5MSSpxFjccj9YjUI0n8ob0L7C0lCrex+saVh41Dp8Lj3gZETS56k6E+H6GFprph1Ls2cPWq3dPt7RycPmSz8LjmLwXT4gczFI8RYwyl4ind/R/lAeSS0xlixyFEqnJLO0SzadAcCWtRbUr0O9gPaHBq5Z0UPO0SyqyXuU+MT8rXoK/Gh/2K8hE0BkgJD6XPz3ginpJhclyTvoIsBqpX4kwLPrkDQn0t7wryt6oqsEI7sgl4ST8SgOgglNChGg8zr7wL/NDcBIHjeA51UtfxEnpsBC1L2M5wXSGCqkC2YegMbhRG4NC+ZiQqeGGGzxL7wbMeYdhG4yNsujzsfYV9uu7jwAaDqapfSMjIzyika4t2HSVPBaBG4yIM0JhCSBEE/EUJs5fwjIyFQ0nSF87GuQ9f0geZipI5esajItGKIOboWzpeYuVD3jlNMfxD3+kZGRQl7NTJJAckN0grDpWcukg36j8oyMjn/EaPY6UlYA7vuPpAyZxBbL7/pG4yJRLSboxUwn7vvESkK/D7iMjIKJtgs6gWrYDzgYYSs/h9TGRkPFsRo5n4YtJDlN35/hMcHDzuR7xkZDW9ApHQw8kOFD3iRGFK1ce8ZGQLZxqXhavxJ9/pEowdX4k+8ZGQLYUkalYUrOkBQJfqzbwccJ2KwOrFvrGRkLNseKRwcLA/wBwHwSfzjBg9nEwf4mNxkImw0jtOFH8Y9DEv8nUbZh7xkZCNsakcfyYj749DHKsGVrmT7xkZBtgaRwcJV+JPv8ASMjIyGtiUj//2Q==" alt="" className="w-80 h-44 border-0 rounded"/>
                <h1  className="text-center text-[20px] font-bold mt-6 bg-slate-400">Dine in & Takeway</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dignissimos illo exercitationem? Inventore dignissimos</p>
            </div>
            <div>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoj1i-CsC7W3nvMdsP70HAIWrRenUvCNMZFKTWcCFWBZPg62sJ" alt="" className="w-80 h-44 border-0 rounded"/>
                <h1  className="text-center text-[20px] font-bold mt-6 bg-slate-400">Veg&Non-Veg</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dignissimos illo exercitationem?Inventore dignissimos </p>
            </div>

        </div>
        <div >
            <div className="grid grid-cols-2">
                <div></div>
                <div className="bg-orange-600 h-1 w-18 "></div>  
            </div>
            <div className="grid grid-cols-2 ">
              <div></div>
                <span>OUR MENU</span>
            </div>
            <div className="flex justify-around mt-6">
                <div className="text-[30px]">Where Flavour<span className="text-orange-600 text-[30px] font-serif">Meets Innvoation</span>-Your <br /><span className="ml-12">Ultimate Culinary Destination</span></div>
            </div>
            <div className="ml-56 mr-56">
                
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit, vel <br />consequatur nobis rerum at veniam sequi! Itaque quisquam corrupti debitis quod aut <br/>assumenda reprehenderit. assumenda reprehenderit.Eligendi vitae nulla sunt id?</p>
            </div>
            <div className="flex justify-center gap-3 mt-2"> 
                <button className="bg-orange-600 border-2 p-1 rounded text-white">view all</button>
                <button className="border-orange-600 border-2 p-1 rounded text-orange-600">Snacks</button>
                <button className="border-orange-600 border-2 p-1 rounded text-orange-600">Meal</button>
                <button className="border-orange-600 border-2 p-1 rounded text-orange-600">Bevegers</button>
            </div>

        </div>
        <div className="grid grid-cols-4 gap-8 p-18">
            <div>
                <img src="https://b.zmtcdn.com/data/pictures/chains/8/21502298/1729615015818b0495-9286-407c-a88e-1f36d87afdb1.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Vegetarian Samosa</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p>
            </div>
            <div className="bg-[linear-gradient(gray,pink,#EB380E,gray)]"> <img src="" className="w-65 h-44 rounded border-0 hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Chicken</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div><img src="https://b.zmtcdn.com/data/pictures/chains/3/21137333/f458ddfdb43ebc8561a515938dd21ef7.jpg?fit=around|960:500&crop=960:500;*,*" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Paneer tikka</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div>
                <img src="data:image/jpeg;base64,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" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Skewer meat Kebab</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div><img src="https://aswinssweets.com/cdn/shop/products/New_0020_minijamun2.jpg?v=1762947667" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Gulab Jamun</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div><img src="https://5.imimg.com/data5/SELLER/Default/2023/4/301044601/ST/KT/GX/75356960/masala-peanut-namkeen-500x500.jpg" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Caramel crosant</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div><img src="https://www.diageoindia.com/~/media/Images/D/Diageo-V2/Universal/images/news-and-media-mega-nav.webp?iar=0" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Mojito</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p></div>
            <div><img src="https://b.zmtcdn.com/data/pictures/9/21317819/55c242e44fdcce8f36e1b6163d055748_o2_featured_v2.jpg" className="w-65 h-44 rounded hover:scale-102" alt="" />
                <h3 className="text-orange-600 font-bold">Lemonade</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt aliquam corrupti.</p>
            </div>
           
        </div>
        <div className="bg-orange-200">
            <div className="grid grid-cols-2 grid-rows-2 p-18">
                <div className=" ml-28" >
                    <div className="flex">
                        <div className="bg-orange-700 w-7 h-1 mt-2 gap-4"></div>
                        <span className="font-serif ml-2">Why Choice US-</span>
                    </div>
                    
                    <p className="text-[35px] font-serif">Discover Why Ruchi's Kitchen Is the <br /><span className="text-orange-600">Preferred Culinary </span>Destination</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/holiday-table-setting-glasses-plates-knives-forks-table-tableware_345343-5524.jpg" className="w-full h-53 rounded hover:scale-102" alt="img1" />
                </div>
                <div>
                    <img src={ime} className="w-82 h-52 ml-28 mt-5 rounded hover:scale-102" alt="img2" />
                </div>
                <div >
                    <div><p className="text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro, perferendis aut, distinctio doloremque ex maiores, soluta amet neque fuga autem necessitatibus.
                    soluta amet neque fuga autem necessitatibus. amet</p></div>
                    <div className="flex mt-5">
                      
                        <div>
                            <h1 className="text-orange-600 font-bold text-[20px]">Authentic Flavor</h1>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea! </p>
                        </div>
                        <div>
                             <h1 className="text-orange-600 font-bold text-[20px]">Exceptional Dining</h1>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="mt-12">
            <div className="grid grid-cols-2">
                <div></div>
                <div className="bg-orange-600 h-1 w-18 ml-4 "></div>  
            </div>
            <div className="grid grid-cols-2 ">
              <div></div>
                <span className="">OUR Testimonals</span>
            </div>
            <div className="text-center">
                <h1 className=" text-[30px] font-serif">Exploring <span className="text-orange-600 font-serif text-[30px]">Ruchi's</span> Kitchen Treasure</h1>
            </div>
            <div className="flex p-10 ml-38 mr-14 g-0 ">
                
                <div className="bg-orange-600 rounded-tr rounded-br p-4 text-white border-2 shadow-lg "><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, odio alias! Neque ducimus labore facere ab maxime, quisquam laudantium corrupti quo mollitia?</p>
                <div className="grid grid-cols-3">
                <div className="w-15 h-15 mt-2 rounded-full border-2 border-gray-600 bg-gray-800">

                </div>
                <span className="mt-6 ">Diya Sharma</span>
                 <div className="flex gap-1 text-yellow-400 text-xl mt-6 ml-3">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} /> 
            </div>
                </div>
                </div>
                <div className="shadow-lg rounded-bl rounded-tl p-4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate fuga consequuntur recusandae quo debitis ratione quos! Dolore ullam illum obcaecati deserunt.</p>
                     <div className="grid grid-cols-3">
                <div className="w-15 h-15 mt-2 rounded-full border-2 border-gray-600 bg-gray-800">
                    
                </div>
                <span className="mt-6 ">Diya Sharma</span>
                 <div className="flex gap-1 text-yellow-400 text-xl mt-6 ml-3">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
           
            </div>
                </div>
                </div>
            </div>
            <div className=" flex text-center ml-140 gap-4">
                <button className="bg-orange-600 border-2 text-white p-1 w-8 h-8 rounded">1</button>
                <button className="bg-orange-600 border-2 text-white p-1 w-8 h-8 rounded">2</button>
                <button className="bg-orange-600 border-2 text-white p-1 w-8 h-8 rounded">3</button>
                <button className="bg-orange-600 border-2 text-white p-1 w-8 h-8 rounded">4</button>
            </div>
        </div>
        <div className="mt-8">
            <div className="grid grid-cols-2">
                <div></div>
                <div className="bg-orange-600 h-1 w-18 ml-1 "></div>  
            </div>
            <div className="grid grid-cols-2 ">
              <div></div>
                <span className="">OUR POST</span>
            </div>
            <div className="flex justify-center mt-2">
                <h1 className="text-[30px] ">Exploring <span className="text-orange-600">Ruchi's</span> Food Treasure</h1>
            </div>
            <div className="grid grid-cols-3 p-12 ml-25 gap-4">
                <div className="shadow-lg">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCa7VVI1kzDxsAto7JXT2GYNOz4enIt93C52Owoa0Lnjmf8GPK" className="w-76 h-56 rounded hover:scale-102" alt="img1" />
                    <span className="text-red-600  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam quaerat deleniti?</p>
                </div>
               <div className="shadow-lg">
                    <img src="https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20759.jpg?w=360" className="w-76 h-56 rounded hover:scale-102" alt="img2" />
                    <span className="text-red-600  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam quaerat deleniti?</p>
                </div>
                <div className="shadow-lg">
                    <img src="https://cdn0.weddingwire.in/vendor/1033/3_2/960/jpg/catering-quality-catering-services-food-display-2_15_291033-158554482975923.webp"  className="w-76 h-56 rounded hover:scale-102"alt="img3" />
                   <span className="text-red-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam quaerat deleniti?</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex justify-around shadow-lg mb-30">
                <div className="flex">
                    <div> </div>
                    <div className="ml-43">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/27/7e/2a/56/fariyas-resort-lonavala.jpg" className="w-32 h-20" alt="img1" />
                    </div>
                </div>
                <div className="text-center text-[30px] font-semibold"><p>Available At Many Places</p>
                <p className="text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, molestias! Impedit, natus?</p></div>
                <div><img src="" alt="" /></div>
            </div>
        </div>
        </>
    )
}
export default Web;