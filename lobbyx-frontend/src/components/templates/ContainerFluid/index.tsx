import classNames from "classnames";
import React, { ReactNode } from "react";

type ContainerFluidProps = {
  children: ReactNode;
  className?: string;
};

const ContainerFluid: React.FC<ContainerFluidProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[90rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContainerFluid;
