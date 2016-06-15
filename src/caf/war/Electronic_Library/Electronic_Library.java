/**
 * 
 */
package caf.war.Electronic_Library;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ApplicationScoped;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;

/**
 * @author DPOD
 *
 */
@ManagedBean(name = "Electronic_Library")
@ApplicationScoped
@DTManagedBean(displayName = "Electronic_Library", beanType = BeanType.APPLICATION)
public class Electronic_Library extends com.webmethods.caf.faces.bean.BaseApplicationBean 
{
	private transient com.webmethods.caf.faces.data.object.ELPropertyContentProvider userNameDefaultviewViewProvider = null;
	private static final String[][] USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS = new String[][] {
		{"#{UserNameDefaultviewViewProvider.object}", "#{UserNameDefaultviewView}"},
	};
	public Electronic_Library()
	{
		super();
		setCategoryName( "CafApplication" );
		setSubCategoryName( "Electronic_Library" );
	}

	public com.webmethods.caf.faces.data.object.ELPropertyContentProvider getUserNameDefaultviewViewProvider()  {
		if (userNameDefaultviewViewProvider == null) {
		    userNameDefaultviewViewProvider = (com.webmethods.caf.faces.data.object.ELPropertyContentProvider)resolveExpression("#{UserNameDefaultviewViewProvider}");
		}
	
	    resolveDataBinding(USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS, userNameDefaultviewViewProvider, "userNameDefaultviewViewProvider", false, false);
		return userNameDefaultviewViewProvider;
	}
}