import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Item, ItemList } from "../style";
import { categories } from '@/constants/mockup/tablents';
import { Checkbox } from "@/components/custom";

const HireSectionCategory = ({ triggerRef }: { triggerRef: any }) => {
    const [checkedList, setCheckedList] = useState<boolean[]>(new Array(categories.length).fill(false));

    const set = (index: number) => {
        let tempList = [...checkedList];
        tempList[index] = !tempList[index];
        setCheckedList(tempList);
    }

    useEffect(() => {
        set(0);
    }, [])


    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 700 },
        delay: 1500,
        from: { opacity: 0, x: "-100%" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            x: dataRef?.isIntersecting ? "0px" : "-100%"
        }
    });

    return (
        <animated.div style={style}>
            <ItemList>
                {categories.map((category, index) => (
                    <Item key={index} isChecked={checkedList[index]} onClick={() => {set(index)}}>
                        <Checkbox label={category} isChecked={checkedList[index]} />
                    </Item>
                ))}
            </ItemList>
        </animated.div>
    )
}

export default HireSectionCategory;
