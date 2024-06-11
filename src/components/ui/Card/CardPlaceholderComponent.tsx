import React from "react";

type SchedulingDetailPlaceholderComponentProps = {
    isLoading: boolean;
}

const CardPlaceholderComponent: React.FC<SchedulingDetailPlaceholderComponentProps> = ({ isLoading }) => {
    return (
        <>
            {isLoading && <div className="card shadow placeholder-glow">

                <div className="card-body">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className="placeholder col-9 mb-2"></div>
                                <div className="placeholder col-8 mb-2"></div>
                                <div className="placeholder col-5 mb-2"></div>
                            </div>
                            <div className="placeholder col-9"></div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default CardPlaceholderComponent;