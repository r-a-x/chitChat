import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader

class TagEditor extends  Component {

    constructor(props){
        super(props);
        this.state = {tags: ['check','happy','sad']}
      }

      handleChange(tags) {
        this.setState({tags})
      }

      render(){
          return(<TagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} />);
      }

}

export default TagEditor;