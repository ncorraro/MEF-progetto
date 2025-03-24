import { createContext, useState, useEffect } from "react";
import api from "./api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [uffici, setUffici] = useState([]);
  const [processi, setProcessi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ufficiRes = await api.get("/uffici/");
        const processiRes = await api.get("/processi/");
        setUffici(ufficiRes.data);
        setProcessi(processiRes.data);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ uffici, processi, loading }}>
      {children}
    </DataContext.Provider>
  );
};
