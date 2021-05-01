import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'


function GalleryList({galleryList, upLikes}) {


    return(
        <div className="images">
            {galleryList.map(image => 
            (<GalleryItem key={image.id} image={image} upLikes={upLikes}/>)
            )}
        </div>
    )


}

export default GalleryList