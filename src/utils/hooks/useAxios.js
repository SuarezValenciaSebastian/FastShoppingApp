import { useState, useCallback } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const useAxios = (method, url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const fetch = useCallback(async () => {
    setData([]);
    setLoading(true);
    try {
      const response = await axios({
        method,
        url,
        ...config,
      });
      setData(response.data);
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error), { variant: "error" });
    }
    setLoading(false);
  }, [method, url, config, enqueueSnackbar]);

  return [data, fetch, loading];
};

export default useAxios;
