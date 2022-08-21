import React from 'react'
import memesData from "./memesData.js"

// import Meme from './imagesMeme/Meme.js'

const MemeMain = () => {

  // const random = () => {
  //     const i = (max) => {
  //     return Math.floor(Math.random() * max);
  //   }  
  //   const memeArrayURL = memesData.data.memes[i(100)].url
  //   console.log(memeArrayURL)

    
  // }
  // // const srcImgPath = memesData.data.memes[random].url
  // const [url, setUrl] = React.useState("nista")
  
  // const click = () => {
  //   setUrl(
  //       function url() {
  //       const i = (max) => {
  //         return Math.floor(Math.url() * max)
  //       }
  //       const memeArrayURL = memesData.data.memes[i(100)].url
  //       console.log(memeArrayURL)


  //     }
  //   )
  // }

  /**
   * create program that will use data from given sorce
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */

      /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
       //  const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    
  //  function getMemeImage() {
  //      const memesArray = memesData.data.memes
  //      const randomNumber = Math.floor(Math.random() * memesArray.length)
  //      setMemeImage(memesArray[randomNumber].url)
       
  //  }

  //new var in state called meme
  const [meme, setMeme] = React.useState({
        //thats an object
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  
  //new var in state called allMemeImages 
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

 
   
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const newImage = memesArray[randomNumber].url
    setMeme(oldValueMeme => {
      return {
          ...oldValueMeme,
          randomImage: newImage
      }
  })
    
  }

   return (
       <main className='MemeMain'>
           <div className="formMeme">
               <div className="textInput">
                  <input 
                      type="text"
                      placeholder="Top text"
                      id="upperText"
                  />
                  <input 
                      type="text"
                      placeholder="Bottom text"
                      id="lowerText"
                  />
               </div>
               
                <div className='buttonDiv'>
                    <button 
                        id="submitButton"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
           </div>
           <img src={meme.randomImage} className="meme" alt=''/>
       </main>
   )
}

export default MemeMain
