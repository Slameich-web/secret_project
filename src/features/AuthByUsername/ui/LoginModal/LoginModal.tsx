import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(styles.loginModal, {}, [className])}>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
