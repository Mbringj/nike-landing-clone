const ShoeCard = ({ imgUrl, changeBigImage, bigShoeImage}) => {

  const handleClick = () => {
    if(bigShoeImage !== imgUrl.bigShoe) {
      changeBigImage(imgUrl.bigShoe);
    }
  }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1`} 
      onClick={handleClick}
    >
      <div>
        <img 
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103} 
          className={`object-contain bg-card flex items-center justify-center bg-cover sm:w-40 sm:h-40 max-sm:flex-1`}
         
        />
      </div>
    </div>
  )
}

export default ShoeCard