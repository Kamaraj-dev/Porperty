import Card from "./Home/Card";
import PropertyFilter from "./Home/PropertyFilter";

const Home=()=>{
    const data=
        [
            {
              "name": "Villa 370 Mira Oasis",
              "price": "25000",
              "location": "03, Sharjah, Dubai, UAE",
              "feature": [" For Rent ", " Furnished ", " Security Cameras ", " Gas Pipeline "]
            },
            {
              "name": "Palm Jumeirah Apartment",
              "price": "45000",
              "location": "Palm Jumeirah, Dubai, UAE",
              "feature": ["For Rent", "Semi-Furnished", "Sea View", "Smart Home"]
            },
            {
              "name": "Downtown Luxury Flat",
              "price": "60000",
              "location": "Downtown, Dubai, UAE",
              "feature": ["For Rent", "Furnished", "Gym Access", "Swimming Pool"]
            },
            {
              "name": "JBR Beachside Apartment",
              "price": "35000",
              "location": "Jumeirah Beach Residences, Dubai, UAE",
              "feature": ["For Rent", "Furnished", "Beach View", "24/7 Security"]
            },
            {
              "name": "Emirates Hills Mansion",
              "price": "150000",
              "location": "Emirates Hills, Dubai, UAE",
              "feature": ["For Sale", "Fully Furnished", "Private Pool", "Golf Course Access"]
            },
            {
              "name": "Burj Khalifa Penthouse",
              "price": "120000",
              "location": "Burj Khalifa, Dubai, UAE",
              "feature": ["For Rent", "Ultra-Luxury", "Skyline View", "Exclusive Lounge"]
            },
            {
              "name": "Dubai Marina High-Rise",
              "price": "40000",
              "location": "Dubai Marina, Dubai, UAE",
              "feature": ["For Rent", "Furnished", "Marina View", "Fitness Center"]
            },
            {
              "name": "Arabian Ranches Villa",
              "price": "55000",
              "location": "Arabian Ranches, Dubai, UAE",
              "feature": ["For Rent", "Unfurnished", "Community Park", "Private Garden"]
            },
            {
              "name": "Business Bay Apartment",
              "price": "30000",
              "location": "Business Bay, Dubai, UAE",
              "feature": [" For Rent ", " Furnished ", " Near Metro ", " Gym & Pool "]
            },
            {
              "name": "Al Barsha Family Villa",
              "price": "50000",
              "location": "Al Barsha, Dubai, UAE",
              "feature": [" For Rent ", " Furnished ", " Pet Friendly ", " Spacious Backyard "]
            }
          ]
        

    return(
        <div className="flex w-full">
            <div className="md:w-5/6">{data.map((datas,index)=><Card key={index}{...datas}/>)}</div>
            <div className=" hidden md:block md:w-1/6"><PropertyFilter/></div>
        </div>
    );
}
export default Home;