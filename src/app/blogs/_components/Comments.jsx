const review = [
    {
        id:1,
        name: "Jon Doe",
        cmt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",

    },
    {
        id:2,
        name: "Anita Dum",
        cmt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",

    },

]
export default function Comments(){
    return(
        <div className="grid grid-cols-2 gap-5" data-aos="fade-left">
        {review.map((items)=>(       

<div className="border-gray-100 border-2 p-5 rounded-lg" key={items.id}>
               <p>{items.cmt}</p>
               <div className="flex items-center gap-2 py-3">
                 <img src="/img2.avif" className="w-14 h-14 rounded-full" />
                 <p className="text-xl"> {items.name}</p>
               </div>
             </div>
             ))} 
             </div>
            )
}