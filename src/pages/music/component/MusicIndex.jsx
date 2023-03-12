import "./MusicIndex.css"
import {  Divider, List, Skeleton,Button } from 'antd';
import { useEffect, useState,useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Global from "../../../data/global";
import ZCard from "../../../component/ZCard/ZCard";
import axios from "axios";
import  "../../../data/mock"
import MusicPlayContext from "./MusicPlay"
//改代码

function MusicIndex (props){

  //const [musicNow,setMusicNow]=useContext(MusicPlayContext);
  const playing=props.playing;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    //加载更多
    if (loading) {
      return;
    }
    setLoading(true);
    //https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo
    axios.get(Global.server+"/music")
    .then((res)=>{
      setData([...data,...res.data]);
      setLoading(false);
    })
    /*
      .then((res) => res.json())
      .then((body)=>{
        console.log(body);
        setData([...data]);
      })
      .catch(() => {
        setLoading(false);
      });
      */
  };

  useEffect(() => {
    loadMoreData();
  },[]);

    //自己加的
    const playMusic=(item)=>{
      //传参
      playing(item);
    }  
  return (
    <div id="scrollableDiv" className="index-box">
        <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={
                <Skeleton
                    avatar
                    paragraph={{
                        rows: 4,
                    }}
                    active
                />
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
        >

        <List
            dataSource={data}
            renderItem={(item) => (
                <List.Item key={item.id} id={item.name}>
                        <ZCard data={item} ></ZCard>
                        <Button onClick={()=>playMusic(item)} shape="circle">播放</Button>
                </List.Item>
            )}
        />

      </InfiniteScroll>
    </div>
  );
};


export default MusicIndex;




/*
  <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>
                <Button shape="round" onClick={playMusic}>播放</Button>
              </div>
            </List.Item>
          )}
    />  
*/