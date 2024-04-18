import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AuthContent from '../components/AuthContent';
import { createUser } from '../util/auth';
import Loading from '../components/Loading';

export default function SignupScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticating(true);
    await createUser(email, password);
    setIsAuthanticating(false);
  }
  if (isAuthanticating) {
    return <Loading message="Kullancı oluşturuyor..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
