import { useNavigate } from 'react-router-dom';

const useBackNavigation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return {
    handleBack,
  };
};

export default useBackNavigation;