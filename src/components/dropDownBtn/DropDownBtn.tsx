import Button from "../Button/Button";
import style from '../../assets/css/dropdown.module.scss';
import { useState } from "react";
import { items as allItems } from './Dummy';
 
type dropDownProps={
    id: number;
    name: string;
    done: boolean;
 }

 
export default function DropDownBtn() {
    const [show, setShow] = useState(false);
    const [selectedItems, setSelectedItems] = useState<dropDownProps[]>([]);
    const [removeList, setRemoveList] = useState([]);

    const toggleBtn = () => {
        setShow(!show);
    }

    const onSelect = (value:number) => {
        const selectedItem = allItems.find(item => item.id === value);

        if (selectedItem) {
            setSelectedItems([...selectedItems, selectedItem]);
            setRemoveList([...removeList, value]);
        }
    }

    const onRemove = (value:number) => {
        const selectedItem = selectedItems.find(item => item.id === value);

        if (selectedItem) {
            setSelectedItems(selectedItems.filter(item => item.id !== value));
            setRemoveList(removeList.filter(id => id !== value));
        }
    }

    return (
        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 10px 6px 10px' }}>
            <Button type="button" children='Add Social Link' className={style.btnContainer} value="arat" onClick={toggleBtn} toggleBtn={show} />
            {show && <div className={style.allItems}>
                {allItems.map((item, index) =>
                    removeList.includes(item.id) ? null : (
                        <div className={style.item} key={index} onClick={() => onSelect(item.id)}>
                            <p>{item.name}</p>
                        </div>
                    )
                )}
            </div>
            }
            {selectedItems.length>0 && 
                <div className={style.selected}>
                    {selectedItems.map((selectItem, index)=>(
                        <div className={style.selectedItem} key={index}>
                            <p>{selectItem.name}</p>
                            <button onClick={() => onRemove(selectItem.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

