import App, { Container } from 'next/app';
import React from 'react';
import theme from '@assets/styles/themes';
import GlobalStyles from '@assets/styles/global-styles';
import { ThemeProvider } from '@assets/styles/themed-components';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;
