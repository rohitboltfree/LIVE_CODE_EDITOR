import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const drawerWidth = 240;


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,

  },
  page: {
    flexDirection: 'column',
    backgroundColor: 'yellow'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,

  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',

  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const MyDocument = () => (

  <Document style={styles.body}  >

    <Page style={styles.page} className="flex justify-between items-center  max-w-3xl min-w-96 mx-auto px-1 " >
      <Text style={styles.header} >HTML</Text>
      <Text style={styles.title} >Basic Of HTML</Text>
      <Text style={styles.text} break >
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad
      </Text>
    </Page>
    <Page style={styles.page} className="flex justify-between items-center  max-w-3xl  min-w-96 mx-auto px-1 " >
      <Text style={styles.header} break>HTML</Text>
      <Text >
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad
      </Text>
    </Page>
    <Page  style={styles.page} className="flex justify-between items-center  max-w-3xl  min-w-96 mx-auto px-1 " >
      <Text style={styles.header} break>HTML</Text>
      <Text >
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad
      </Text>
    </Page>
  </Document>

);

function Theory() {
  const [toggle, setToggle] = useState(false)
  const [doc,setDoc] = useState(1);
  return (
     <div className=" flex h-full  overflow-hidden">
      <div  
      style={{
        position:'sticky',
        // transform: `${!toggle? 'translateX(-100%)' : 'translateX(0)'}`,
        width: `${!toggle? '0' : '15rem'}`
      }}
      className="left border w-60 h-full transition-all overflow-y-scroll border-y-8">
        <div className='flex flex-col'>

        {
          [1,2,3,4,5,6,7,8,9].map((e)=>{
            return(
              <Button
              onClick={()=>setDoc(e)}
              >
                {e}
              </Button>
            )
          })
        }
        </div>
      </div>
      <div
        style={{
          // width: `${toggle ? 'calc(100vw - 15rem)' :'100%'}`

        }}
      className="right flex-1 border h-full ml-auto transition-all overflow-y-scroll">
        <Button
        onClick={()=>{
          setToggle(()=>!toggle)
        }}
        >Toggle</Button>

        <MyDocument/>
      </div>
      
     </div>
  )
}

// ReactDOM.render(<Theory />, document.getElementById('root'));
export default Theory