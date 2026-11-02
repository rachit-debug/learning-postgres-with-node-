
const { User } = require("../models/User");

let CreateUser = async (req, res) => {
  try {
    const { UserName, UserEmail, PhoneNumber , Message } = req.body;

    let insertObj = { UserName, UserEmail, PhoneNumber , Message }

    let data = await User.create(insertObj)

    if(!data){
      return res.status(404).json({
        message : "User not create",
        status : false
      })
    }

    res.status(201).json({
      message : "user create sucesfully",
      status : true
    })

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

let ViewUser = async (req,res) => {
  try{

    let userView = await User.findAll()

    if(!userView.length === 0){
      return res.status(404),json({
        message : "data not found",
        status : false
      })
    }

     res.status(201).json({
      message : "User found",
      status : true,
      userView

    })



  }
  catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}


let Delete = async (req,res) => {

  try{
    const {id} = req.params
    let data = await User.destroy({
      where : {id}
    })

     res.status(200).json({
      message : "User Delete Successfully",
      status : true,
      userView

    })


  }
  catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }

}


let UserUpdate = async (req,res) => {
  try{
    const {id} = req.params
    const { UserName, UserEmail, PhoneNumber , Message } = req.body;

    let UpdateObj = { UserName, UserEmail, PhoneNumber , Message }

    let UpdateData = User.update(UpdateObj,{
      where : {id}
    })

    if(!UpdateData){
      return res.status(404),json({
        message : "data not update",
        status : false
      })
    }

     res.status(200).json({
      message : "User Update Successfully",
      status : true,

    })



  }catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }

}


module.exports = {CreateUser , ViewUser , Delete , UserUpdate}
