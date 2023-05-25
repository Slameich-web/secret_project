import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData);
  }, [dispatch]);
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileCard className={className} />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
