const Footer = () => {
  return (
    <footer className="bg-secondary text-quinary h-[200px] p-5 flex-1 border-t">
      <div className="container text-center mt-5 mb-5">
        <h4 className="flex text-tertiary items-center justify-center">
          M4-PT20b
        </h4>
        {/* <h4 className="flex text-tertiary items-center justify-center">
          YisusSHOP
        </h4> */}
        <p className="text-tertiary">
          <span className="text-primary/50">©</span> 2024 YisusSHOP{' '}
          <span className="text-primary/50">|</span> Jesús Garcia{' '}
          <span className="text-primary/50">|</span> Synergy2Devs. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
