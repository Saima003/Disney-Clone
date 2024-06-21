import React from 'react'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
const ClerkConfig = () => {
  return (
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY} appearance={customAppearance}>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  )
}

export default ClerkConfig