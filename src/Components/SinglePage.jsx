import React, { useEffect } from 'react'
import '../CSS/SinglePage.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  getSingleProduct } from '../Redux/App/action';
import { useDispatch, useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Tab, Tabs, Typography } from "@mui/material";




//------------------drawer components------------//
const drawerWidth = 382;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
//------------------^------------//

const SinglePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
//------------------drawer components------------//
const theme = useTheme();
const [opend, setOpend] = React.useState(false);



const handleDrawerClose = () => {
  setOpend(false);
};
//-----------------------------------------------------//
  const { id } = useParams();
  const [size, setSize] = useState(false);
  const [sizeval, setSizeval] = useState("");
  const { single } = useSelector((store) => store.AppReducer);
  const handleClick = () => {
    if (sizeval === "") {
      alert("Please Select A size")
    }
    else {
      alert("Product is added to cart")
      setSize(true);
      setOpend(true);

    }
  }
  const handleProcess = () => {
    navigate("/cart")
  }


  
const [currentTabIndex, setCurrentTabIndex] = useState(0);
const handleTabChange = (e, tabIndex) => {
  console.log(tabIndex);
  setCurrentTabIndex(tabIndex);
};

  useEffect(() => {
    if (id) {
    
      let payload = id;
      dispatch(getSingleProduct(payload));
    }
  }, [id, dispatch]);
  return (
    <>
      <div className='main main-class'>
        <div className='leftall'>
          <div className='leftdiv'>
          <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label='DETAILS' />
        <Tab label='DELIVERY' />
        <Tab label='FIT' />
        <Tab label='SHARE' />
      </Tabs>
 
      {/* TAB 1 Contents */}
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
         
          <Typography variant='p'>
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.See the EDITOR’S NOTELearn about the DESIGNER
          </Typography>
        </Box>
      )}
 
      {/* TAB 2 Contents */}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
       
          <Typography variant='p'>
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      )}
 
      {/* TAB 3 Contents */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
       
          <Typography variant='p'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s,
          </Typography>
        </Box>
      )}
 
      {/* TAB 4 Contents */}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
        
          <Typography variant='p'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </Box>
      )}
    
          </div>
        </div>
        <div className='middleall' style={{ display: "flex", justifyContent: "space-between" }}>
          <div className='middlediv1'>
            <img src={single?.image} alt="" />
            <div className='two-sided-images'>
            <img src={single?.image1} alt="" />
            <img src={single?.image2} alt="" />
            </div>
            <img src={single?.image3} alt="" />
          </div>
      
        </div>
        <div className='rightall'>
          <div className='rightdiv'>
            <h4 style={{ marginBottom: "1px",fontSize:"48px",fontWeight:400 }}>{single?.name || single?.producttitle}</h4>
            <p style={{ fontSize:"14px",marginBottom: "1x" }}>{single?.desc}</p>
            <p style={{fontWeight:400, fontSize:"14px",marginBottom: "1px" }}>{single?.color}</p>
            <p style={{fontWeight:700, fontSize:"14px",marginBottom: "1px" }}>{single?.price}</p>
            <p style={{ marginButtom: "40px" }}>COLOR <b>CONCHIGLIA</b></p>
            <div style={{display:"flex"}}>
            <div className='middlediv2'>
            <img src={single?.image} alt="" />
           
          </div>
          <div className='middlediv2'>
            <img src={single?.image} alt="" />
          </div>
          </div>
            <div id="size">
              <select className='selectsize' value={sizeval} onChange={(e) => setSizeval(e.target.value)}>
                <option>Select A Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginButtom: "40px" }}>
              <p>FIND YOUR SIZE</p>
              <p>SIZE GUIDE</p>
            </div>
            <input type="button" className='addbutton menu-btn' value='ADD TO BAG' style={{ marginButtom: "50px" }} onClick={handleClick} />
            <input type="button" className='addbutton menu-btn' value='PROCESS ORDER'
              style={(size === true) ? { visibility: 'visible', marginTop: "25px" } : { visibility: 'hidden' }} onClick={handleProcess} />
            <p style={{ marginButtom: "40px", fontSize: "12px" }}>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
            <p style={{ marginButtom: "40px", fontSize: "12px" }}>Speak to a Personal Stylist CHAT NOW</p>
          </div>
        </div>

      </div>
   
    </>
  )
}

export default SinglePage
