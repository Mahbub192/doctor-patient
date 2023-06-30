import { Button } from "@mui/material";


const BookOurDoctor = () => {
    return (
        <div className="flex flex-wrap my-20 container mx-auto">
            <div className="w-2/6">
                <h1 className="text-3xl ">Book Our Doctor</h1>
                <p className="text-justify mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nulla ad ex non, natus porro corrupti fugit consequuntur itaque iusto eos, nihil facilis velit asperiores soluta dignissimos. Asperiores, quasi laboriosam...</p>
                <Button className="hover:bg-sky-600 hover:text-white mt-5" variant="outlined">Read More</Button>
            </div>
            <div className="w-4/6">
                
            </div>
        </div>
    );
};

export default BookOurDoctor;