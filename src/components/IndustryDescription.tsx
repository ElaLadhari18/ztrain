import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IndustryDescription from '../components/IndustryDescription';

const IndustryDetail = () => {
  const { id } = useParams();
  const [industry, setIndustry] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'une API ou récupération des données
    fetch(`https://api.example.com/industries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIndustry(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!industry) return <p>Industrie non trouvée.</p>;

  return (
    <div className="p-6">
      <IndustryDescription title={industry.name} description={industry.expertise || "Aucune expertise disponible."} />
    </div>
  );
};

export default IndustryDetail;
