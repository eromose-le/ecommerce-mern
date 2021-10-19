import { Publish } from '@material-ui/icons';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { userRequest } from '../../requestMethods';
import './product.css';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total }
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  console.log('OUT', pStats);
  return (
    <div className="product">
      {/* Header */}
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      {/* Top */}
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="product" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInforItem">
              <span className="productInfoKey">{product?._id} :</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInforItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInforItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="productBottom">
        <form className="productForm">
          {/* Form Left */}
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product?.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product?.desc} />
            <label>Price</label>
            <input type="text" placeholder={product?.price} />
            <label>In stock</label>
            <select name="instock" id="idstock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          {/* Form Right */}
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={product?.img}
                alt="product"
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
