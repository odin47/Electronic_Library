/**
 * 
 */
package caf.war.Electronic_Library.username;

/**
 * @author DPOD
 *
 */

import javax.portlet.PortletPreferences;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import com.webmethods.caf.faces.annotations.ExpireWithPageFlow;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;
import com.webmethods.caf.faces.data.dir.IPrincipalProvider;
import com.webmethods.caf.faces.data.dir.PrincipalModelFactory;

@ManagedBean(name = "UserName")
@SessionScoped
@ExpireWithPageFlow
@DTManagedBean(displayName = "UserName", beanType = BeanType.PORTLET)
public class UserName  extends   com.webmethods.caf.faces.bean.BaseFacesPreferencesBean {

	public static final String[] PREFERENCES_NAMES = new String[] {};
	private transient caf.war.Electronic_Library.Electronic_Library electronic_Library = null;
	private transient com.webmethods.caf.faces.data.object.ELPropertyContentProvider userNameDefaultviewViewProvider = null;
	private static final String[][] USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS = new String[][] {
		{"#{UserNameDefaultviewViewProvider.object}", "#{UserNameDefaultviewView}"},
	};
	/**
	 * Create new preferences bean with list of preference names
	 */
	public UserName() {
		super(PREFERENCES_NAMES);
	}
	
	/**
	 * Call this method in order to persist
	 * Portlet preferences
	 */
	public void storePreferences() throws Exception {
		updatePreferences();
		PortletPreferences preferences = getPreferences();
		preferences.store();
	}

	public caf.war.Electronic_Library.Electronic_Library getElectronic_Library()  {
		if (electronic_Library == null) {
		    electronic_Library = (caf.war.Electronic_Library.Electronic_Library)resolveExpression("#{Electronic_Library}");
		}
		return electronic_Library;
	}

	public com.webmethods.caf.faces.data.object.ELPropertyContentProvider getUserNameDefaultviewViewProvider()  {
		if (userNameDefaultviewViewProvider == null) {
		    userNameDefaultviewViewProvider = (com.webmethods.caf.faces.data.object.ELPropertyContentProvider)resolveExpression("#{UserNameDefaultviewViewProvider}");
		}
	
	    resolveDataBinding(USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS, userNameDefaultviewViewProvider, "userNameDefaultviewViewProvider", false, false);
		return userNameDefaultviewViewProvider;
	}
	
}