'use client';

import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="dark:bg-background mb-10 w-full overflow-hidden bg-neutral-100 dark:dark:bg-black">
      <Container className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600" />
          </div>

          <div>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              © {new Date().getFullYear()} Aman Kushwaha
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
