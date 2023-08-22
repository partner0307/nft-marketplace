import { Flex, List, ListItem, P, Span } from '@/components/basic';
import React, { useState } from 'react';
import { MenuContainer, MenuItem, MenuItemContainer } from './style';
import { Checkbox, Icon } from '@/components/custom';

const EcommerceMenu = () => {
    const [isWomenClothingOpen, setWomenClothingOpen] = useState(false);
    const [isMenSetsOpen, setMenSetsOpen] = useState(false);
    const [isCellPhoneOpen, setCellPhoneOpen] = useState(false);
    const [isComputerAccessories, setComputerAccessories] = useState(false);
    const [isElectronicsOpen, setElectronicsOpen] = useState(false);
    const [isJewelryOpen, setJewelryOpen] = useState(false);
    const [isHomeApplianceOpen, setHomeApplianceOpen] = useState(false);
    const [isBagOpen, setBagOpen] = useState(false);
    const [isShoesOpen, setShoesOpen] = useState(false);
    const [isBeautyOpen, setBeautyOpen] = useState(false);
    const [isMothersAndKidsOpen, setMothersAndKidsOpen] = useState(false);
    const [isToyOpen, setToyOpen] = useState(false);
    const [isApplianceOpen, setApplianceOpen] = useState(false);
    const [isPetProductOpen, setPetProductOpen] = useState(false);
    const [isHomeAndGardenOpen, setHomeAndGardenOpen] = useState(false);
    const [isSecurityOpen, setSecurityOpen] = useState(false);
    const [isOfficeOpen, setOfficeOpen] = useState(false);
    const [isHairExtensionOpen, setHairExtensionOpen] = useState(false);
    const [isAutoMobilesOpen, setAutoMobilesOpen] = useState(false);
    const [isToolsOpen, setToolsOpen] = useState(false);
    const [isHomeImprovementOpen, setHomeImprovementOpen] = useState(false);
    const [isWeddingOpen, setWeddingOpen] = useState(false);
    const [isUnderwearOpen, setUnderwearOpen] = useState(false);
    const [isAccessoriesOpen, setAccessoriesOpen] = useState(false);

    return <>
    <MenuContainer>
        <MenuItem>
            <P $style={{ size: '20px' }}>All</P>
        </MenuItem>
        <MenuItemContainer>
            <MenuItem onClick={() => setWomenClothingOpen(!isWomenClothingOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Women’s Clothing</P>} />
                    {isWomenClothingOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isWomenClothingOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setMenSetsOpen(!isMenSetsOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Men’s Sets</P>} />
                    {isMenSetsOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isMenSetsOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setCellPhoneOpen(!isCellPhoneOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Cellphone</P>} />
                    {isCellPhoneOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isCellPhoneOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setComputerAccessories(!isComputerAccessories)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Computer Accessories</P>} />
                    {isComputerAccessories === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isComputerAccessories && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setElectronicsOpen(!isElectronicsOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Electronics</P>} />
                    {isElectronicsOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isElectronicsOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setJewelryOpen(!isJewelryOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Jewelry</P>} />
                    {isJewelryOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isJewelryOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setHomeApplianceOpen(!isHomeApplianceOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Home Appliances</P>} />
                    {isHomeApplianceOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isHomeApplianceOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setBagOpen(!isBagOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Bags</P>} />
                    {isBagOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isBagOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setShoesOpen(!isShoesOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Shoes</P>} />
                    {isShoesOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isShoesOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setBeautyOpen(!isBeautyOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Beauty</P>} />
                    {isBeautyOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isBeautyOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setMothersAndKidsOpen(!isMothersAndKidsOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Mothers and Kids</P>} />
                    {isMothersAndKidsOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isMothersAndKidsOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setToyOpen(!isToyOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Toy</P>} />
                    {isToyOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isToyOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setApplianceOpen(!isApplianceOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Appliances</P>} />
                    {isApplianceOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isApplianceOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setPetProductOpen(!isPetProductOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Pet Product</P>} />
                    {isPetProductOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isPetProductOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setHomeAndGardenOpen(!isHomeAndGardenOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Home and Garden</P>} />
                    {isHomeAndGardenOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isHomeAndGardenOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setSecurityOpen(!isSecurityOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Security</P>} />
                    {isSecurityOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isSecurityOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setOfficeOpen(!isOfficeOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Office</P>} />
                    {isOfficeOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isOfficeOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setHairExtensionOpen(!isHairExtensionOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Hair Extension</P>} />
                    {isHairExtensionOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isHairExtensionOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setAutoMobilesOpen(!isAutoMobilesOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Automobiles</P>} />
                    {isAutoMobilesOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isAutoMobilesOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setToolsOpen(!isToolsOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Tools</P>} />
                    {isToolsOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isToolsOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setHomeImprovementOpen(!isHomeImprovementOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Home Improvement</P>} />
                    {isHomeImprovementOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isHomeImprovementOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setWeddingOpen(!isWeddingOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Wedding</P>} />
                    {isWeddingOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isWeddingOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer>
            <MenuItem onClick={() => setUnderwearOpen(!isUnderwearOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Underwear</P>} />
                    {isUnderwearOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isUnderwearOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
        <MenuItemContainer isLast={true}>
            <MenuItem onClick={() => setAccessoriesOpen(!isAccessoriesOpen)}>
                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', w: '100%' }}>
                    <Checkbox label={<P $style={{ size: '20px' }}>Accessories</P>} />
                    {isAccessoriesOpen === true ? <Icon icon='ChevronArrowDown' /> : <Icon icon='ChevronArrowRight' />}
                </Flex>
            </MenuItem>
            {isAccessoriesOpen && <List>
                <ListItem hideDot>
                    <Flex $style={{ p: '4px 16px' }}><Span $style={{ size: '16px' }}>Pants</Span></Flex>
                </ListItem>
            </List>}
        </MenuItemContainer>
    </MenuContainer>
</>
}

export default EcommerceMenu;