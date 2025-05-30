import {
  MENU_ITEMS,
  HORIZONTAL_MENU_ITEMS,
  MenuItemTypes,
  MANAGER_MENU_ITEMS,
  TEAM_LEADER_MENU_ITEMS,
  TEAM_MEMBER_MENU_ITEMS,
} from "../constants/menu";

const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return MENU_ITEMS;
};

const getTeamMemberMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return TEAM_MEMBER_MENU_ITEMS;
};

const getManagerMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return MANAGER_MENU_ITEMS;
};

const getTeamLeaderMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return TEAM_LEADER_MENU_ITEMS;
};

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HORIZONTAL_MENU_ITEMS;
};

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem["parentKey"]);

  if (parent) {
    parents.push(parent["key"]);
    if (parent["parentKey"])
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      var found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export {
  getMenuItems,
  getHorizontalMenuItems,
  findAllParent,
  findMenuItem,
  getManagerMenuItems,
  getTeamMemberMenuItems,
  getTeamLeaderMenuItems,
};
