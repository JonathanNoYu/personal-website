import { React, useState } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaCaretDown, FaPlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function CollapseList(link, collapseButton, open, setOpen) {
    if (collapseButton) {
        return (
            <Button key={link} className="rounded-0 wd-text-left" variant="secondary"
                onClick={() => setOpen(!open)}
                aria-controls={`${module.collapse}`}
                aria-expanded={open}>
                <FaGripVertical className="pe-2" />
                <FaCaretDown className="me-1" />
                {module.name}
                <FaEllipsisVertical className="mt-1 float-end" />
                <FaPlus className="float-end mt-1 me-3" />
            </Button>
        );
    }
    else {
        return (
            <div key={module._id} className="list-group-item d-flex flex-row w-100">
                <FaGripVertical size={28} className="pe-3 text-success mt-2" />
                <div className="flex-column m-auto ms-0">
                    <div>{module.name}</div>
                    - {module.description}
                </div>
                <div className="flex-row-reverse">
                    <Button className="mx-2 float-end" variant="secondary"
                        onClick={() => dispatch(setModule(module))}>
                        Edit
                    </Button>
                    <Button className="wd-text-left float-end" variant="danger"
                        onClick={() => dispatch(deleteModule(module._id))}>
                        Delete
                    </Button>
                    <FaEllipsisVertical className="fa-xl text-black text-end float-end mt-3" />
                    <FaCircleCheck className="float-end text-end wd-green mt-3 text-success" />
                </div>
            </div>
        );
    }
}
export default CollapseList;