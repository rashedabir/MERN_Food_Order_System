import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminAPI(token) {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getAdmins = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            "https://hungrynaki.herokuapp.com/user/users",
            {
              headers: { Authorization: token },
            }
          );
          setAdmins(res.data.users);
          setLoading(false);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getAdmins();
    }
  }, [token, callback]);

  return {
    admins: [admins, setAdmins],
    loading: [loading, setLoading],
    callback: [callback, setCallback],
  };
}

export default AdminAPI;
