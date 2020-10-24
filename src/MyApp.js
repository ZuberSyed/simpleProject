import React from "react"
import ContactCard from "./ContactCard"
import Header from "./Header"
import "./style.css"

function MyApp(){
   return (
   <div>
       <Header/>
   <div className="contacts">
       <ContactCard 
                name="Webbie"
                imgUrl="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                phone="5458754658"
                mail="webbie@gmail.com" 
                />
       <ContactCard
                name="Flex"
                imgUrl="https://cdn.pixabay.com/photo/2016/11/21/14/47/adorable-1845789_960_720.jpg"
                phone="8559754658"
                mail="flex@gmail.com"
       />
       <ContactCard 
                    name="Oliver"
                    imgUrl="https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914_960_720.jpg"
                    phone="6768354688"
                    mail="oliver@gmail.com"
                    />
       <ContactCard
                    name="Max"
                    imgUrl="https://cdn.pixabay.com/photo/2019/06/06/20/16/cat-4256821_960_720.jpg"
                    phone="55454564658"
                    mail="max@gmail.com"
                    />
                    <ContactCard
                        name="Charlie"
                        imgUrl="https://cdn.pixabay.com/photo/2017/08/24/16/27/cat-2677430_960_720.jpg"
                        phone="9808754658"
                        mail="charlie@gmail.com"
                    />
                     <ContactCard
                        name="Grid"
                        imgUrl="https://cdn.pixabay.com/photo/2014/11/05/17/28/savannah-cat-518126_960_720.jpg"
                        phone="8087546589"
                        mail="grid@gmail.com"
                    />
                     <ContactCard
                        name="Luna"
                        imgUrl="https://cdn.pixabay.com/photo/2018/03/03/08/43/cat-3195180_960_720.jpg"
                        phone="5869470258"
                        mail="luna@gmail.com"
                    />
                    <ContactCard
                        name="Shadow"
                        imgUrl="https://cdn.pixabay.com/photo/2016/11/18/21/57/animal-1837067_960_720.jpg"
                        phone="6947020058"
                        mail="shadow@gmail.com"
                    />
                    <ContactCard
                        name="Lia"
                        imgUrl="https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg"
                        phone="0125468258"
                        mail="lia@gmail.com"
                    />
                    <ContactCard
                        name="Sophie"
                        imgUrl="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_960_720.jpg"
                        phone="8691170258"
                        mail="sophie@gmail.com"
                    />
                    <ContactCard
                        name="Zelda"
                        imgUrl="https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345_960_720.jpg"
                        phone="7125420258"
                        mail="zelda@gmail.com"
                    />
                    <ContactCard
                        name="Leo"
                        imgUrl="https://cdn.pixabay.com/photo/2015/12/08/00/42/cat-face-1081951_960_720.jpg"
                        phone="8692270258"
                        mail="leo@gmail.com"
                    />
                    <ContactCard
                        name="Rosie"
                        imgUrl="https://cdn.pixabay.com/photo/2018/06/28/14/12/cat-3504008_960_720.jpg"
                        phone="9211170258"
                        mail="rosie@gmail.com"
                    />
                    <ContactCard
                        name="Lucy"
                        imgUrl="https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_960_720.jpg"
                        phone="8617000258"
                        mail="lucy@gmail.com"
                    />
                    <ContactCard
                        name="Milo"
                        imgUrl="https://cdn.pixabay.com/photo/2020/09/17/13/59/cat-5579221_960_720.jpg"
                        phone="1170200058"
                        mail="milo@gmail.com"
                    />

   </div>
</div>
    )
}

export default MyApp