import { ReactNode } from 'react'

export const metadata = {
  title: 'MST',
  description: 'MST Template'
}

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => (
  <html lang='en'>
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout
