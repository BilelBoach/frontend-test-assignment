import { Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {BlogCard} from './BlogCard';

import "./Blogs.scss";

function Blogs() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
     async function fetchData() {
        const response = await fetch(" https://ak-fe-assessment-mock-api.herokuapp.com/blogs");
        const data = await response.json();
      setBlogs(data);
      }
      fetchData();
    }, [])

    const renderBlogs = () => {
        if (selectedFilter === "latest"){
            const lenght = blogs.length;
            return (
                <BlogCard className={"greenStrip"} blog = {blogs[lenght - 1]} />
              )
        }
        if (selectedFilter === "author"){
        const BlogbyDamian = blogs.filter(blog => blog.authorName === "Damian Kastbauer");
        return BlogbyDamian.map(blog => (
            <BlogCard className={"blueStrip"} blog = {blog} key = {blog.id} />
          )) 
        }
        if (selectedFilter === "all"){
            return blogs.map(blog => (
                <BlogCard className={"smallImage"} blog = {blog} key = {blog.id} />
              )) 
        }
    }
    
    return (<>
        <header className="blogs-header">
            <Typography variant="h4">Blogs: </Typography>
            <ToggleButtonGroup
                value={selectedFilter}
                exclusive
                onChange={(e) => setSelectedFilter(e.target.value)}
            >
                <ToggleButton value="latest" >
                    Latest
                </ToggleButton>
                <ToggleButton value="author">
                    By Damian Kastbauer
                </ToggleButton>
                <ToggleButton value="all" >
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </header>
        <Divider variant="fullWidth"></Divider>
        <section className="blogs">

        {renderBlogs()}
           
        </section>
    </>);
}
  
export default Blogs;
  