import React from 'react';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1></BaiTapLayout1> */}
      {/* <BaiTapLayout2></BaiTapLayout2> */}
      {/* <DataBinding></DataBinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <Styling></Styling> */}
      {/* <RenderWithState></RenderWithState> */}
      {/* <BaiTapChonXe></BaiTapChonXe> */}
      <RenderWithMap></RenderWithMap>
    </div>
  );
}

export default App;


