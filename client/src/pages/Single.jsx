import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src="https://images.pexels.com/photos/13742139/pexels-photo-13742139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Duis vitae eros lorem. Phasellus sapien ante, elementum in nunc sed,
          faucibus sollicitudin urna. Praesent rutrum arcu erat, fringilla
          posuere orci pellentesque at. Fusce quis eros fringilla, molestie
          neque nec, laoreet enim. In vitae nunc turpis. Sed quis elementum leo.
          Donec sed ipsum nisl. Quisque sollicitudin est eget congue maximus.
          <br /> <br />
          Maecenas pharetra, nisl et tempus tempor, lectus metus suscipit diam,
          vitae ullamcorper odio augue id neque. Ut eget accumsan dolor. Nunc in
          eros ultrices, pulvinar sapien ut, interdum sapien. Cras odio odio,
          vestibulum vel cursus in, aliquet vitae diam. Ut imperdiet neque nec
          consectetur faucibus. Nullam ultrices tortor semper nisl ullamcorper,
          in efficitur metus ultrices. Nulla id nibh rhoncus, ullamcorper nisl
          non, blandit ante. In vel imperdiet mauris, non pulvinar ex. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Curabitur eget metus rutrum, congue augue nec, dignissim risus.
          <br />
          <br />
          Duis sodales molestie felis, a ultrices ante fringilla non. Proin id
          felis dictum, iaculis urna ac, pellentesque augue. Duis iaculis, quam
          vitae condimentum posuere, nisl ipsum vehicula neque, a ultrices ante
          tortor nec mi. Pellentesque lacus lorem, convallis eget urna a,
          pellentesque malesuada tellus. Vivamus porttitor rhoncus nisi, in
          molestie ipsum consectetur at. Integer bibendum, neque non rhoncus
          tempus, dolor mi hendrerit arcu, sed lobortis nunc erat at odio.
          <br />
          <br />
          Praesent viverra turpis ultrices, mollis massa a, fringilla nisl.
          Pellentesque tempus urna felis, eu rutrum dui facilisis blandit. Proin
          id urna est. Aliquam rutrum dui nec eros malesuada consequat. Cras
          consectetur hendrerit tristique. Morbi tempor risus eget ex lobortis
          mollis. Ut risus enim, elementum vitae eros et, placerat eleifend
          purus. Nunc sed enim euismod, molestie metus vitae, ultricies dolor.
          <br />
          <br />
          Sed non dignissim nibh. Integer at odio vitae metus dignissim viverra
          at quis augue. In eget lacinia risus. Nam nulla ligula, sodales ut
          libero non, vehicula hendrerit quam. Pellentesque efficitur bibendum
          ex, et lobortis leo elementum vel. Vestibulum dictum congue ex, non
          suscipit leo faucibus sit amet. In venenatis velit ex, sed venenatis
          diam euismod at. Proin eu nunc porta, ornare ligula sit amet, tempor
          massa. Ut at eros a ante venenatis feugiat non ut ante. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec vel vulputate
          magna. Fusce tristique hendrerit dui, vel dictum urna scelerisque
          gravida. Fusce id tortor quis massa efficitur volutpat a at libero.
          Cras ut dictum tellus, et egestas dui. In eu justo nec purus pharetra
          posuere convallis id
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
