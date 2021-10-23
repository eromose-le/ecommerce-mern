import { Publish } from '@material-ui/icons';
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { userRequest } from '../../requestMethods';
import './product.css';

// UPDATE
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';
import app from '../../firebase';
import { updateProduct } from '../../redux/apiCalls';

const Product = () => {
  const location = useLocation();
  const history = useHistory();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);
  const [prodId, setProdId] = useState(productId);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  // UPDATE
  const [file, setFile] = useState(product?.img);
  const [cat, setCat] = useState(product?.categories);
  const [color, setColor] = useState(product?.color);
  const [size, setSize] = useState(product?.size);
  const dispatch = useDispatch();

  // INPUT
  const [title, setTitle] = useState(product?.title);
  const [desc, setDesc] = useState(product?.desc);
  const [price, setPrice] = useState(product?.price);
  const [inStock, setInStock] = useState(product?.inStock);

  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(','));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(','));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const id = prodId;
            const product = {
              title,
              desc,
              price,
              inStock,
              img: downloadURL,
              categories: cat,
              color,
              size,
              _id: id
            };

            updateProduct(id, product, dispatch);
            setProdId(prodId);

            // console.log(product, id);
            if (product) {
              alert('Product Updated!!');
            }
          });
        }
      );
      // IF NO IMAGE IN UPDATE FORM
    } catch {
      const id = prodId;
      const product = {
        title,
        desc,
        price,
        inStock,
        img: file,
        categories: cat,
        color,
        size,
        _id: id
      };

      await updateProduct(id, product, dispatch);
      setProdId(prodId);

      // console.log(product, id);
      if (product) {
        alert('Product Updated!!');
        history.push('/products');
      }
    }
  };

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
              <span className="productInfoKey">Id :</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInforItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">50</span>
            </div>
            <div className="productInforItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {product?.inStock === true ? 'Available' : 'Not available'}
              </span>
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
            <input
              name="title"
              type="text"
              defaultValue={product?.title}
              placeholder={product?.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Product Description</label>
            <textarea
              name="desc"
              type="text"
              defaultValue={product?.desc}
              placeholder={product?.desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Price</label>
            <input
              name="price"
              type="number"
              defaultValue={product?.price}
              placeholder={product?.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Categories</label>
            <input
              type="text"
              defaultValue={product?.categories}
              placeholder={product?.categories}
              onChange={handleCat}
            />
            <label>Color</label>
            <input
              type="text"
              defaultValue={product?.color}
              placeholder={product?.color}
              onChange={handleColor}
            />
            <label>Size</label>
            <input
              type="text"
              defaultValue={product?.size}
              placeholder={product?.size}
              onChange={handleSize}
            />
            <label>In stock</label>
            <select
              name="inStock"
              defaultValue={product?.inStock}
              onChange={(e) => setInStock(e.target.value)}
              id="idstock"
            >
              <option disabled>select</option>
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
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
