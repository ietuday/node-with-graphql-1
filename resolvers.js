import mongoose from "mongoose";

const users = [];
let user = {};

import Item from './models/item';
import User from './models/user';
import Post from './sequelize/post';

export const resolvers = {
  Query :{
    getItem: async(_, {id}) => {
      return await Item.findOne({_id: id});
    },
    getUser: async (_,{id}) => {
      // const newid = mongoose.Types.ObjectId(id);
      return  await User.findOne({_id: id}).populate('items');
    },
    getUsers: async() => {
      return await User.find().populate('items');
    },
    getPosts: async() => {
      return await Post.findAll();
    }
  },
  Mutation:{
    createUser: async ( _, {input}) => {    
      const user = await User.create(input);
      return await User.findOne({_id: user.id}).populate('items');
    },
    updateUser: async ( _, {input}) => {    
      return await User.findOneAndUpdate({_id: input.id}, input, {new: true}).populate('items');
    },
    deleteUser: async ( _, {id}) => {    
      return await User.findOneAndRemove({_id: id});
    },
    createItem:  (_, {input}) => {
         return Promise.resolve(Item.create(input));
    },
    createPost: async (_, {input}) => {
      return await Post.create(input);
    }
  }
};